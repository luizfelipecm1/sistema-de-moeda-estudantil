from sqlmodel import SQLModel, Field
from uuid import UUID
from typing import Optional

class Empresa(SQLModel, table=True):
    id: UUID = Field(default=None, primary_key=True)  # Identificador único da empresa
    nome: str = Field(default=None, index=True)  # Nome da empresa
    cnpj: str = Field(default=None, unique=True)  # CNPJ da empresa (único)
    endereco: Optional[str] = Field(default=None)  # Endereço da empresa
    usuario_id: UUID = Field(default=None, foreign_key="user.id")  # Relacionamento com o User (empresa é um tipo de usuário)
