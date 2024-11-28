from sqlmodel import SQLModel, Field
from pydantic import EmailStr
from uuid import UUID
from typing import Optional

class User(SQLModel, table=True):
    id: UUID = Field(default=None, primary_key=True)
    username: str = Field(default=None, index=True, unique=True)  # Nome de usuário
    password_hash: str = Field(default=None)  # Senha hashada
    email: Optional[EmailStr] = Field(default=None, index=True, unique=True)  # E-mail
    tipo_usuario: str = Field(default="aluno", index=True)  # Tipo de usuário (aluno, professor, empresa)
    aluno_id: Optional[UUID] = Field(default=None, foreign_key="aluno.id")  # Relacionamento com Aluno
    professor_id: Optional[UUID] = Field(default=None, foreign_key="professor.id")  # Relacionamento com Professor
    empresa_id: Optional[UUID] = Field(default=None, foreign_key="empresa.id")  # Relacionamento com Empresa

    # Dependendo do tipo de usuário, podemos precisar de campos específicos
    # Por exemplo, no caso de um professor, talvez queira adicionar "instituicao_id"
    # Caso a empresa precise de um CNPJ, isso poderia ser representado em um modelo separado
