from app.schemas import AlunoCreate
from app.models import Aluno


from sqlmodel import Session
from sqlalchemy import select

from uuid import uuid4


def create_aluno(session: Session, aluno_create: AlunoCreate) -> Aluno:
    db_obj = Aluno(
        id=uuid4(),
        nome=aluno_create.nome,
        email=aluno_create.nome,
        cpf=aluno_create.nome,
        rg=aluno_create.nome,
        endereco=aluno_create.nome,
        instituicao_ensino=aluno_create.nome,
        curso=aluno_create.nome,
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def read_alunos(session: Session) -> list[Aluno]:
    stmt = select(Aluno)
    return session.exec(stmt).all()
