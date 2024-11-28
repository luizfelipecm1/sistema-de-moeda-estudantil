from pydantic import BaseModel
from uuid import UUID
from typing import Optional

class EmpresaCreate(BaseModel):
    nome: str
    cnpj: str
    endereco: Optional[str] = None

    class Config:
        orm_mode = True  # Permite que os dados do modelo SQLModel sejam convertidos para Pydantic


class EmpresaRead(BaseModel):
    id: UUID
    nome: str
    cnpj: str
    endereco: Optional[str] = None

    class Config:
        orm_mode = True  # Permite que os dados do modelo SQLModel sejam convertidos para Pydantic
