from typing import Optional
from pydantic import BaseModel


class AlunoCreate(BaseModel):
    nome: str
    email: str
    cpf: str
    rg: str
    endereco: str
    instituicao_ensino: Optional[str] = None
    curso: Optional[str] = None
