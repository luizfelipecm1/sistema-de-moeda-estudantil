from uuid import UUID
from typing import Optional
from pydantic import EmailStr
from sqlmodel import SQLModel, Field


class Aluno(SQLModel, table=True):
    id: UUID = Field(default=None, primary_key=True)
    nome: str = Field(default=None, index=True)
    email: EmailStr = Field(default=None, index=True)
    cpf: str = Field(default=None, index=True)
    rg: str = Field(default=None, index=True)
    endereco: str = Field(default=None, index=True)
    instituicao_ensino: Optional[str] = Field(default=None)
    curso: Optional[str] = Field(default=None)
