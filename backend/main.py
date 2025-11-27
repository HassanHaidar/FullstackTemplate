from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes.feedback import router as feedback_routes

app = FastAPI()

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(feedback_routes, prefix="/feedback", tags=["feedback"])

@app.get("/")
def root():
    return {"message": "Hello from FastAPI on Windows!"}
