from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.database import get_db
from pydantic_models import AlunoCreate, Aluno
from database import crud

router = APIRouter()

@router.post("/", response_model=Aluno)
def criar_aluno(aluno: AlunoCreate, db: Session = Depends(get_db)):
    try:
        return crud.create_aluno(db=db, aluno=aluno)
    except Exception as e:
        print(f"Erro ao criar aluno: {e}")
        raise HTTPException(status_code=500, detail="Erro ao criar aluno.")

@router.get("/", response_model=list[Aluno])
def obter_alunos(db: Session = Depends(get_db)):
    return crud.get_alunos(db)

@router.get("/{aluno_id}", response_model=Aluno)
def obter_aluno(aluno_id: int, db: Session = Depends(get_db)):
    aluno = crud.get_aluno(db, aluno_id=aluno_id)
    if aluno is None:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    return aluno

@router.put("/{aluno_id}", response_model=Aluno)
def atualizar_aluno(aluno_id: int, aluno: AlunoCreate, db: Session = Depends(get_db)):
    aluno_atualizado = crud.update_aluno(db, aluno_id=aluno_id, aluno=aluno)
    if aluno_atualizado is None:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    return aluno_atualizado

@router.delete("/{aluno_id}", response_model=Aluno)
def deletar_aluno(aluno_id: int, db: Session = Depends(get_db)):
    aluno_deletado = crud.delete_aluno(db, aluno_id=aluno_id)
    if aluno_deletado is None:
        raise HTTPException(status_code=404, detail="Aluno não encontrado")
    return aluno_deletado
