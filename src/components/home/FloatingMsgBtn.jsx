import { MessageSquare } from "lucide-react";

// Floating Messages Button
const FloatingMsgBtn = ({ toggleMessages, newMessages }) => {
    return (
        <div className="fixed bottom-20 right-4">
                {/* Notification Badge */}
                {newMessages > 0 && (
                    <div className="absolute -top-2 -righ-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                        {newMessages > 99 ? "99+" : newMessages}
                    </div>
                )}

                {/* Floating Button */}
            <button
                onClick={toggleMessages}
                className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition">
                <MessageSquare className="h-6 w-6" />
            </button>
        </div>
    );
};

export default FloatingMsgBtn;