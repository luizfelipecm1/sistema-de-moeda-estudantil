from app.schemas import EmpresaCreate, EmpresaRead
from app.models import Empresa
from sqlmodel import Session
from sqlalchemy import select
from uuid import uuid4, UUID


def create_empresa(session: Session, empresa_create: EmpresaCreate) -> Empresa:
    """Função para criar uma nova empresa no sistema."""
    db_obj = Empresa(
        id=uuid4(),
        nome=empresa_create.nome,
        cnpj=empresa_create.cnpj,
        endereco=empresa_create.endereco,
    )
    
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def read_empresas(session: Session) -> list[EmpresaRead]:
    """Função para listar todas as empresas no sistema."""
    stmt = select(Empresa)
    return session.exec(stmt).all()


def get_empresa_by_id(session: Session, empresa_id: UUID) -> EmpresaRead:
    """Função para buscar uma empresa pelo ID."""
    stmt = select(Empresa).where(Empresa.id == empresa_id)
    empresa = session.exec(stmt).first()
    return empresa
