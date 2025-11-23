from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_users():
    return [{"id": 1, "name": "Ezz"}]

@router.get("/{user_id}")
def get_user(user_id: int):
    return {"id": user_id, "name": "User " + str(user_id)}
