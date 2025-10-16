#!/bin/bash
source venv/bin/activate
python -m uvicorn research_agent_backend.main:app --reload --port 8000