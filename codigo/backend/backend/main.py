from fastapi import FastAPI
from database.database import engine, SessionLocal
from database.models import Base
from controllers.aluno_controller import router as aluno_router

app = FastAPI()

# Cria as tabelas no banco de dados
Base.metadata.create_all(bind=engine)

# Registrar o roteador de alunos
app.include_router(aluno_router, prefix="/alunos", tags=["Alunos"])

@app.get("/")
def read_root():
    return {"Hello": "World"}
