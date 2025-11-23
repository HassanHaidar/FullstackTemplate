## How to setup the backend
Initialize backend directory
```
mkdir backend
```

Navigate to the newly created directory
```
cd backend
```

Create Python virtual environment named venv
```
python -m venv venv
```

Activate virtual environment 
```
venv\Scripts\Activate.ps1
```

If blocked: 
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Install fastapi
```
pip install fastapi uvicorn[standard]
```

Run application :) 
```
uvicorn main:app --reload --port 8000
```
