from app.schemas import ProfessorCreate, ProfessorRead
from app.models import Professor
from sqlmodel import Session
from sqlalchemy import select
from uuid import uuid4, UUID


def create_professor(session: Session, professor_create: ProfessorCreate) -> Professor:
    """Função para criar um novo professor no sistema."""
    db_obj = Professor(
        id=uuid4(),
        nome=professor_create.nome,
        cpf=professor_create.cpf,
        instituicao_ensino=professor_create.instituicao_ensino,
        departamento=professor_create.departamento,
    )
    
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def read_professors(session: Session) -> list[ProfessorRead]:
    """Função para listar todos os professores no sistema."""
    stmt = select(Professor)
    return session.exec(stmt).all()


def get_professor_by_id(session: Session, professor_id: UUID) -> ProfessorRead:
    """Função para buscar um professor pelo ID."""
    stmt = select(Professor).where(Professor.id == professor_id)
    professor = session.exec(stmt).first()
    return professor
