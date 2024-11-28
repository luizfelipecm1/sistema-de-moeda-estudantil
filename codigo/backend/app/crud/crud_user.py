from app.schemas import UserCreate, UserRead
from app.models import User
from sqlmodel import Session
from sqlalchemy import select
from uuid import uuid4, UUID  # Importando UUID corretamente
from passlib.context import CryptContext

# Instanciando o contexto de criptografia para senha
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """Função para criptografar a senha antes de armazená-la."""
    return pwd_context.hash(password)


def create_user(session: Session, user_create: UserCreate) -> User:
    """Função para criar um novo usuário no sistema."""
    hashed_password = hash_password(user_create.password)  # Criptografa a senha

    db_obj = User(
        id=uuid4(),
        username=user_create.username,
        password_hash=hashed_password,  # Salva a senha criptografada
        email=user_create.email,
        tipo_usuario=user_create.tipo_usuario,
    )
    # Dependendo do tipo de usuário, você pode precisar adicionar o relacionamento
    # com aluno, professor ou empresa (isso vai variar conforme o caso)
    
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj


def read_users(session: Session) -> list[UserRead]:
    """Função para ler todos os usuários no sistema."""
    stmt = select(User)
    return session.exec(stmt).all()




def get_user_by_id(session: Session, user_id: UUID) -> UserRead:
    """Função para ler um usuário específico pelo ID."""
    stmt = select(User).where(User.id == user_id)
    user = session.exec(stmt).first()
    return user
