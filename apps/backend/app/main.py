from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "AI Research Agent API is working!"}

@app.get("/health")
async def health():
    return {"status": "healthy"}