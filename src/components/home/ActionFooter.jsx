import { Video, History, } from "lucide-react";
import UnderDevPop from "../others/UnderDevPop.jsx";

// Action Footer
const ActionFooter = ({ handleButtonClick, showPopup, isSidebarOpen, handleGoLive }) => {
    return (
        <>
            <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex flex-wrap justify-center gap-4 transition-transform ${
                isSidebarOpen ? "lg:pl-64" : ""
            }`}
            >
                {/* Go Live Button */}
                <button 
                    className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg border hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={true}                    
                    onClick={handleGoLive}
                    
                
                >
                    <Video className="h-5 w-5" />
                    Go Live
                </button>
                {/*View Past Live Button*/}
                <button 
                    className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
                    onClick={handleButtonClick}
                >
                    <History className="h-5 w-5" />
                    View Past Live
                </button>
                {/*
                <button
                    className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
                >
                    <Home className="h-5 w-5" />
                </button>
                */}
                {/* Add more icons here in the future*/}

                
            </div>
                {/* Popup */}
                {showPopup.show && <UnderDevPop showPopup={showPopup}/>}
        </>
    );
};

export default ActionFooter;