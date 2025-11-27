from api.models.log import Log
log_repo = []

def store_logs(logs: list[Log]):
    try :
        log_repo.extend(logs)
    except:
        print('error while storing logs')
    finally:
        print(log_repo)

def get_logs():
    return log_repo