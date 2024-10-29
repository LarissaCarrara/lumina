from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import asyncpg

app = FastAPI()

class LoginData(BaseModel):
    email: str
    password: str

DATABASE_URL = ""

async def get_user(email: str):
    conn = await asyncpg.connect(DATABASE_URL)
    table = await conn.fetchrow('SELECT * FROM users WHERE email = $1', email) 
    await conn.close()
    return table

@app.post("/login")
async def fazer_login(data: LoginData):
    
    user = await get_user(data.email)

    if user and user['password'] == data.password:
        return {"access_token": "fake_token_123"}
    else:
        raise HTTPException(status_code=400, detail="Credenciais inválidas")