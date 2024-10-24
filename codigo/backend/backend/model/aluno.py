from pydantic import BaseModel
from typing import Optional
from model.user import Usuario
from model.instituicao import InstituicaoEnsino  

class Aluno(Usuario):
    matricula: str
    curso: str
    instituicao: InstituicaoEnsino 