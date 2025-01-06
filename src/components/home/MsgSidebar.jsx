import { FaPaperPlane } from "react-icons/fa";
import BtnDisabled from "../others/BtnDisabled.jsx";

// Messages Sidebar
const MsgSidebar = ({ isMessagesOpen, setMessage, message, handleSendMessage, messages, msgBtnDisabled }) => {
    const footerHeight = 64; // Assuming the footer height is 64px (adjust if necessary)

    return (
    <div
        className={`fixed right-0 top-16 h-[calc(100vh-4rem-${footerHeight}px)] w-64 bg-white border-1 border-gray-400 shadow-md transform transition-transform duration-200 ease-in-out 
            ${isMessagesOpen ? "translate-x-0" : "translate-x-full"}`} 
        
    >
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
            </div>
            {/* Messages Section */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {messages && messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-2 rounded-md ${
                                msg.isSender ? "bg-blue-100 text-blue-800 self-end" : "bg-gray-100 text-gray-800"
                            }`}
                        >
                            {msg.text}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No messages yet</p>
                )}
            </div>

            {/* Input Section */}
            <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
                <textarea 
                    className="flex-1 p-3 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                
                <FaPaperPlane
                    className={`text-blue-500 ${
                        msgBtnDisabled ? "text-gray-400 cursor-not-allowed" : "hover:text-blue-600 cursor-pointer"
                    }`} 
                    size={24}
                    onClick={msgBtnDisabled ? (e) => e.preventDefault() : handleSendMessage} // Prevent action if disabled
                    disabled
                />
                
           </div>
        </div>
    </div>
    );
};

export default MsgSidebar;