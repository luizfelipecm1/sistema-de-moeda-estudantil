from typing import Optional
from pydantic import BaseModel
from uuid import UUID


class AlunoCreate(BaseModel):
    nome: str
    email: str
    cpf: str
    rg: str
    endereco: str
    instituicao_ensino: Optional[str] = None
    curso: Optional[str] = None
    moedas: float

class AlunoRead(BaseModel):
    id: UUID
    nome: str
    email: str
    cpf: str
    rg: str
    endereco: str
    instituicao_ensino: Optional[str] = None
    curso: Optional[str] = None
    moedas: float
    
    class Config:
        orm_mode = True