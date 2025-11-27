import type { Feedback } from "../pages/feedback";

interface FeedbackTableProps {
    feedback: Feedback[];
}

export const FeedbackTable = ({ feedback }: FeedbackTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Feedback</th>
                </tr>
            </thead>
            <tbody>
                {feedback.map((item) => (
                    <tr key={item.id}>
                        <td>{item.user_name}</td>
                        <td>{item.feedback_text}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};