from sqlalchemy import Column, Integer, String, TIMESTAMP, text
from app.db.database import Base

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    contact_number = Column(String, nullable=False)
    email = Column(String, nullable=False)
    education = Column(String, nullable=False)
    plan_of_future = Column(String, nullable=False)
    career_path = Column(String, nullable=False)   # ✅ Added career_path
    created_at = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP"))


















    # from sqlalchemy import Column, Integer, String, TIMESTAMP, text
# from app.db.database import Base

# class ContactMessage(Base):
#     __tablename__ = "contact_messages"

#     id = Column(Integer, primary_key=True, index=True)
#     full_name = Column(String, nullable=False)
#     contact_number = Column(String, nullable=False)
#     email = Column(String, nullable=False)
#     education = Column(String, nullable=False)
#     plan_of_future = Column(String, nullable=False)
#     created_at = Column(TIMESTAMP, server_default=text("CURRENT_TIMESTAMP"))


