# from pydantic import BaseModel, EmailStr

# class ContactRequest(BaseModel):
#     fullName: str
#     contactNumber: str
#     email: EmailStr
#     education: str
#     planOfFuture: str

#     class Config:
#         orm_mode = True
from pydantic import BaseModel, EmailStr

class ContactRequest(BaseModel):
    fullName: str
    contactNumber: str
    email: EmailStr
    education: str
    planOfFuture: str
    careerPath: str   # ✅ Added

    class Config:
        orm_mode = True
