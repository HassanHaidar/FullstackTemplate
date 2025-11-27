import json
from api.models.log import Log
from api.repos import log_repository

def create_logs(file_content: str):
    logs: list[Log] = create_logs_from_file_contents(file_content)
    store_logs(logs)
    pass

# transforms file content string into Log list
def create_logs_from_file_contents(file_content):
    parsed_logs = json.loads(file_content)
    logs: list[Log] = [Log(**item) for item in parsed_logs]
    return logs

# stores logs in db/file system/
def store_logs(logs):
    log_repository.store_logs(logs)

# return all logs stored in the system
def get_logs(service: str = None, severity: str = None):
    logs = log_repository.get_logs()
    if service:
        logs = [log for log in logs if log.service == service]

    if severity:
        logs = [log for log in logs if log.severity == severity]
    return logs

