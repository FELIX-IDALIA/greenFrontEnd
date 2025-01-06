import { Tv, Users, TrendingUp, Bookmark, } from "lucide-react";

// Sidebar
const Btn = ({ icon: Icon, children }) => {
    return (
    <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 rounded-lg">
        <Icon className="h-5 w-5 text-gray-600" />
        <span className="text-gray-700">{children}</span>
    </button>
    );
};

const SidebarLeft = ({ isSidebarOpen}) => {

    return (
        <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out  
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full" } 
            lg:translate-x-0`}
        >
            <div className="p-4 space-y-4">
                <Btn icon={Tv}>Live Streams</Btn>
                <Btn icon={Users}>Following</Btn>
                <Btn icon={TrendingUp}>Trending</Btn>
                <Btn icon={Bookmark}>Saved Streams</Btn>
            </div>
            
        </div>
    ); 
};

export default SidebarLeft;