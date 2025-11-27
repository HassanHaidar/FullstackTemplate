from fastapi import APIRouter
from fastapi import UploadFile, File
from api.controllers import logs_controller

router = APIRouter()

@router.post("/upload_file")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    logs_controller.create_logs(contents)
    return 'Log file uploaded successfully'

@router.get("")
def list_logs(service: str = None, severity: str = None):
    return logs_controller.get_logs(service, severity)