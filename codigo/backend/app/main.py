from fastapi import FastAPI
from app import schemas, models, crud
from app.core.deps import SessionDep

app = FastAPI()


@app.post("/aluno")
async def create_aluno(
    session: SessionDep, aluno_in: schemas.AlunoCreate
) -> models.Aluno:
    aluno = crud.create_aluno(session, aluno_in)
    return aluno


@app.get("/aluno")
async def read_alunos(session: SessionDep) -> list[models.Aluno]:
    alunos = crud.read_alunos(session)
    print(alunos)
    return alunos
