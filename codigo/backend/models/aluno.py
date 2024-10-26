from typing import Optional
from pydantic import BaseModel, EmailStr


class Aluno(BaseModel):
    nome: str
    email: EmailStr
    cpf: str
    rg: str
    endereco: str
    instituicao_ensino: Optional[str] = None
    curso: Optional[str] = None
