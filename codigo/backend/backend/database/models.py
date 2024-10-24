from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database.database import Base  # Certifique-se de que este import esteja correto

class AlunoDB(Base):
    __tablename__ = "alunos"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    senha = Column(String)
    matricula = Column(String, unique=True, index=True)
    curso = Column(String)
    rg = Column(String)  # Adicionando RG
    endereco = Column(String)  # Adicionando Endereço
    instituicao_id = Column(Integer, ForeignKey("instituicoes.id"))

    instituicao = relationship("InstituicaoEnsinoDB", back_populates="alunos")


class InstituicaoEnsinoDB(Base):
    __tablename__ = "instituicoes"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, unique=True, index=True)
    
    alunos = relationship("AlunoDB", back_populates="instituicao")
