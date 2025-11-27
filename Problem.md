“Mini Feedback Dashboard”

Scenario
You’re building a tiny internal tool where employees can submit feedback and view feedback from others.

You will build:
A Python FastAPI backend with 2 endpoints
A React+TS frontend with a simple form + list
(Optional) A simple in-memory “database” (Python list)

No persistent DB required.

Feedback type:
text

Feedback is public



POST /feedback -> Partial<Feedback>
Request body:
{
    feedback: string
}

GET /feedback -> List<Feedback>

Feedback: 
{
    id: uuid
    author: uuid
    feedback: string
    timestamp: long 
}

