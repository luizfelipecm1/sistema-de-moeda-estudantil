from enum import Enum
from typing import Optional
from pydantic import BaseModel, EmailStr 


class Tipo(str, Enum):
    Aluno = "aluno"
    Professor = "professor"
    Empresa = "empresa"


class Usuario(BaseModel):
    nome: str
    tipo: Tipo
    email: EmailStr
    senha: str
    cpf: Optional[str] = None
