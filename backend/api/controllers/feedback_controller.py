from api.models.feedback import FeedbackDto
from api.models.feedback import Feedback
from api.repos.feedback_repo import feedback_list
from datetime import datetime, timezone

def create_feedback(feedbackDto: FeedbackDto):
    new_id = len(feedback_list) + 1
    
    feedback = Feedback(
        id=new_id,
        user_name=feedbackDto.user_name,
        feedback_text=feedbackDto.feedback_text,
        timestamp=datetime.now(timezone.utc).isoformat() 
    )        
    feedback_list.append(feedback)
    return feedback


def retrieve_feedback():
    return feedback_list.copy()