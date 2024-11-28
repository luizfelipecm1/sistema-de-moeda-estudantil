from sqlmodel import SQLModel, Field
from uuid import UUID
from typing import Optional

class Professor(SQLModel, table=True):
    id: UUID = Field(default=None, primary_key=True)  # Identificador único
    nome: str = Field(default=None, index=True)  # Nome do professor
    cpf: str = Field(default=None, unique=True)  # CPF do professor
    instituicao_ensino: Optional[str] = Field(default=None)  # Instituição de ensino
    departamento: Optional[str] = Field(default=None)  # Departamento ao qual o professor pertence
    usuario_id: UUID = Field(default=None, foreign_key="user.id")  # Relacionamento com o User (professor é um tipo de usuário)
    moedas: float = Field(default=0.0, description="Quantidade de moedas que o aluno possui")  # Novo campo
