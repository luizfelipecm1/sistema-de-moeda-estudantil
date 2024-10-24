from pydantic import BaseModel

class InstituicaoEnsino(BaseModel):
    nome: str
    codigo: str