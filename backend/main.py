from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Paruvathe Payir Sei API")

# Setup CORS to allow Next.js frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    email: str

@app.get("/")
def read_root():
    return {"message": "Welcome to Paruvathe Payir Sei API"}

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

@app.post("/api/subscribe")
def subscribe(form: ContactForm):
    # This is a placeholder for actual email subscription logic
    return {"message": "Successfully subscribed", "email": form.email}

@app.get("/api/reviews")
def get_reviews():
    # Placeholder for fetching dynamic reviews
    return {
        "reviews": [
            {"name": "Paul James", "rating": 5, "comment": "Thanks for this session, i learned more information f..."},
            {"name": "Prakash Deepak", "rating": 5, "comment": "Super and excellent"},
            {"name": "Ivanjali Ivaishi", "rating": 5, "comment": "It was so awesome and i really learned a lot pf thing..."}
        ]
    }
