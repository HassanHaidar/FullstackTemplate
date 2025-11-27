from pydantic import BaseModel

class Log(BaseModel):
    timestamp : str
    service : str
    severity : str
    message : str
    requestId : str
    