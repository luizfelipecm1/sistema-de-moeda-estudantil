FROM python:3.10-slim AS build

RUN pip install poetry
COPY pyproject.toml poetry.lock ./

RUN poetry install --without dev

FROM build AS runtime

WORKDIR /app

COPY ./app /app

CMD ["poetry", "run", "fastapi", "run", "/app/main.py"]
