from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from database.models import AlunoDB
from pydantic_models import AlunoCreate
from fastapi import HTTPException

def create_aluno(db: Session, aluno: AlunoCreate):
    try:
        # Cria um novo objeto AlunoDB a partir dos dados do modelo Pydantic
        db_aluno = AlunoDB(**aluno.model_dump())  # model_dump() para obter um dicionário
        db.add(db_aluno)  # Adiciona o aluno à sessão
        db.commit()  # Salva as alterações no banco

        # Atualiza a instância do aluno com os dados do banco
        db.refresh(db_aluno)  

        return db_aluno
    except IntegrityError as e:
        db.rollback()  # Desfaz as alterações se ocorrer um erro de integridade
        print(f"Erro de integridade: {e.orig}")  # Imprime detalhes do erro
        raise HTTPException(status_code=400, detail="Erro de integridade: dados duplicados ou inválidos.")
    except Exception as e:
        print(f"Erro ao criar aluno: {e}")  # Imprime detalhes do erro
        raise HTTPException(status_code=500, detail="Erro ao criar aluno.")
def get_alunos(db: Session):
    return db.query(AlunoDB).all()

def get_aluno(db: Session, aluno_id: int):
    return db.query(AlunoDB).filter(AlunoDB.id == aluno_id).first()

def update_aluno(db: Session, aluno_id: int, aluno: AlunoCreate):
    db_aluno = db.query(AlunoDB).filter(AlunoDB.id == aluno_id).first()
    if db_aluno:
        for key, value in aluno.dict().items():
            setattr(db_aluno, key, value)
        db.commit()
        db.refresh(db_aluno)
        return db_aluno
    return None

def delete_aluno(db: Session, aluno_id: int):
    db_aluno = db.query(AlunoDB).filter(AlunoDB.id == aluno_id).first()
    if db_aluno:
        db.delete(db_aluno)
        db.commit()
        return db_aluno
    return None
