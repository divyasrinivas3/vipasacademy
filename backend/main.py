from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware   
from app.db.database import engine, get_db, Base
from app.models.contact import ContactMessage
from app.schemas.contact import ContactRequest

# Auto-create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# ✅ Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],   
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/contact")
def save_contact(data: ContactRequest, db: Session = Depends(get_db)):
    new_msg = ContactMessage(
        full_name=data.fullName,
        contact_number=data.contactNumber,
        email=data.email,
        education=data.education,
        plan_of_future=data.planOfFuture,
        career_path=data.careerPath
    )
    db.add(new_msg)
    db.commit()
    db.refresh(new_msg)
    return {
        "success": True,
        "id": new_msg.id,
        "fullName": new_msg.full_name,
        "careerPath": new_msg.career_path
    }
