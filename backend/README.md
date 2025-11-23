mkdir backend
cd backend

python -m venv venv

powershell: venv\Scripts\Activate.ps1
if blocked: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

pip install fastapi uvicorn[standard]

uvicorn main:app --reload --port 8000