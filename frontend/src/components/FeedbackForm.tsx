interface FeedbackFormProps {
    onSubmit: (userName: string, feedbackText: string) => void;
}

export const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const userName = (form.elements.namedItem("userName") as HTMLInputElement).value;
        const feedbackText = (form.elements.namedItem("feedbackText") as HTMLInputElement).value;
        onSubmit(userName, feedbackText);
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="userName" required />
            </div>
            <div>
                <label>Feedback:</label>
                <textarea name="feedbackText" required></textarea>
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    );
}