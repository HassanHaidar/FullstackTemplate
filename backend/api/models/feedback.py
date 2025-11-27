from pydantic import BaseModel
from datetime import datetime


class Feedback(BaseModel):
    id: int
    user_name: str
    feedback_text: str
    timestamp: datetime

class FeedbackDto(BaseModel):
    user_name: str
    feedback_text: str