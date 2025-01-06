import { MessageSquare } from "lucide-react";

// Floating Messages Button
const FloatingMsgBtn = ({ toggleMessages }) => {
    return (
        <button
            onClick={toggleMessages}
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
            <MessageSquare className="h-6 w-6" />
        </button>
    );
};

export default FloatingMsgBtn;