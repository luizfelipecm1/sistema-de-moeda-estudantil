from pydantic import BaseModel, EmailStr
from uuid import UUID
from typing import Optional

# Base schema para leitura de dados
class UserBase(BaseModel):
    username: str
    email: Optional[EmailStr] = None
    tipo_usuario: str = "aluno"  # Tipo de usuário, padrão é "aluno"

# Schema de criação (para receber dados de entrada ao criar um novo usuário)
class UserCreate(UserBase):
    password: str  # A senha, que será criptografada no back-end

    class Config:
        orm_mode = True  # Para que o modelo Pydantic consiga trabalhar com o SQLModel (ORM)

# Schema de resposta (para retorno de dados após a criação ou consulta)
class UserRead(UserBase):
    id: UUID
    aluno_id: Optional[UUID] = None
    professor_id: Optional[UUID] = None
    empresa_id: Optional[UUID] = None

    class Config:
        orm_mode = True  # Para que o modelo Pydantic consiga trabalhar com o SQLModel (ORM)

# Schema para atualização de dados (caso o usuário queira alterar alguma informação)
class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    tipo_usuario: Optional[str] = None

    class Config:
        orm_mode = True
