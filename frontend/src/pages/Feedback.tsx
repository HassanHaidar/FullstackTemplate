import { useEffect, useState } from "react";
import { FeedbackTable } from "../components/FeedbackTable";
import { FeedbackForm } from "../components/FeedbackForm";

export interface Feedback {
    id: number,
    user_name: string,
    feedback_text: string,
    timestamp: string
}

const Feedback = () => {
    const [feedback, setFeedback] = useState<Feedback[]>([]);

    const fetchFeedback = async () => {
        const res = await fetch("http://localhost:8000/feedback");
        const data = await res.json();
        setFeedback(data.feedbacks);
    }

    const postFeedback = async (username: string, feedbackText: string) => {
        await fetch("http://localhost:8000/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_name: username, feedback_text: feedbackText })
        });
        fetchFeedback();
    }

    useEffect(() => {
        fetchFeedback();
    }, []);

    return <>
        <h1>Feedback Page</h1>
        <FeedbackForm onSubmit={postFeedback} />
        <FeedbackTable feedback={feedback} />
    </>;
}

export default Feedback;