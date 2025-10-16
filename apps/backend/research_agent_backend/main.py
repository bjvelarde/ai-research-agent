from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, Dict, Any
import os

app = FastAPI(
    title="AI Research Agent API",
    description="Backend for AI-powered research assistant",
    version="1.0.0"
)

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ResearchRequest(BaseModel):
    query: str
    max_sources: Optional[int] = 5
    detailed: Optional[bool] = True

class ResearchResponse(BaseModel):
    id: str
    query: str
    status: str
    results: Optional[Dict[str, Any]] = None
    error: Optional[str] = None

@app.get("/")
async def root():
    return {"message": "AI Research Agent API", "status": "healthy"}

@app.post("/research", response_model=ResearchResponse)
async def start_research(request: ResearchRequest):
    try:
        # For now, return mock data - we'll implement real research in the next step
        research_id = f"res_{os.urandom(4).hex()}"
        
        return ResearchResponse(
            id=research_id,
            query=request.query,
            status="completed",
            results={
                "content": f"Mock research results for: {request.query}\n\nThis is where the AI research will appear once we integrate LangChain.",
                "sources_used": request.max_sources,
                "detailed": request.detailed,
                "status": "completed"
            }
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Research failed: {str(e)}")

@app.get("/research/{research_id}")
async def get_research_status(research_id: str):
    return {"id": research_id, "status": "completed"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)