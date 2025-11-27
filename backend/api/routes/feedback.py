from fastapi import APIRouter

from api.controllers import feedback_controller
from api.models.feedback import FeedbackDto

router = APIRouter()

@router.post("/")
def post_feedback(feedback: FeedbackDto):
    result = feedback_controller.create_feedback(feedback)
    return {"status": "Feedback received", "feedback": result}
    

@router.get("/")
def get_feedback():
    feedbacks = feedback_controller.retrieve_feedback()
    return {"feedbacks": feedbacks} 
