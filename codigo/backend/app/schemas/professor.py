from pydantic import BaseModel
from uuid import UUID
from typing import Optional

class ProfessorCreate(BaseModel):
    nome: str
    cpf: str
    instituicao_ensino: Optional[str] = None
    departamento: Optional[str] = None
    moedas: float

    class Config:
        orm_mode = True  # Permite que os dados do modelo SQLModel sejam convertidos para Pydantic


class ProfessorRead(BaseModel):
    id: UUID
    nome: str
    cpf: str
    instituicao_ensino: Optional[str] = None
    departamento: Optional[str] = None

    class Config:
        orm_mode = True  # Permite que os dados do modelo SQLModel sejam convertidos para Pydantic
