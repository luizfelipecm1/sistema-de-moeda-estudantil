from pydantic import BaseModel, EmailStr
from typing import Optional

class AlunoCreate(BaseModel):
    nome: str
    email: EmailStr
    senha: str
    matricula: str
    curso: str
    rg: str  # Adicionando RG
    endereco: str  # Adicionando Endereço
    instituicao_id: Optional[int]  # Este pode ser None se não for obrigatório

# Modelo para retornar o aluno criado
class Aluno(BaseModel):
    id: int
    nome: str
    email: EmailStr
    matricula: str
    curso: str
    rg: str  # Adicionando RG
    endereco: str  # Adicionando Endereço
    instituicao_id: Optional[int]
    
    

    class Config:
        orm_mode = True  # Isso permite que o modelo funcione com SQLAlchemy
        

