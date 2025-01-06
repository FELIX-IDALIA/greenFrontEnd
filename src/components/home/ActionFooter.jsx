import { Video, History, } from "lucide-react";
import UnderDevPop from "../others/UnderDevPop.jsx";

// Action Footer
const ActionFooter = ({ handleButtonClick, showPopup }) => {
    return (
        <>
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex justify-center gap-4">
                <button 
                    className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg border border-gray-200 hover:bg-purple-700 transition"
                    onClick={handleButtonClick}
                
                >
                    <Video className="h-5 w-5" />
                    Go Live
                </button>
                <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-300 transition">
                    <History className="h-5 w-5" />
                    View Past Live
                </button>
            </div>
                {showPopup.show && <UnderDevPop showPopup={showPopup}/>}
        </>
    );
};

export default ActionFooter;