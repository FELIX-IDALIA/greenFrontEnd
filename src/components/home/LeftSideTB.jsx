import { Menu } from "lucide-react";

// Sidebar Toggle Button
const LeftSideTB = ({ toggleSidebar }) => {  {/*LeftSidebarToggleButton*/}
    return (
        <div className="flex items-center gap-4">
            <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <span className="text-xl font-semibold text-gray-800">GreenLive</span>
        </div>
        
    );
};

export default LeftSideTB;