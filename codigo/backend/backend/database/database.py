from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# URL de conexão com o banco de dados (exemplo com PostgreSQL)
DATABASE_URL = "postgresql://postgres:sucesso09@localhost/sistema_de_moeda"

# Criação do engine que vai gerenciar as conexões com o banco de dados
engine = create_engine(DATABASE_URL)

# Criação da sessão local que será usada em cada requisição
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para criar os modelos de banco de dados
Base = declarative_base()


def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()