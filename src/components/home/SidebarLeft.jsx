import { Tv, Users, TrendingUp, Bookmark, Dot} from "lucide-react";

// Sidebar
const Btn = ({ icon: Icon, children, isSidebarOpen }) => {
    return (
    <button className={`w-full px-4 py-2 flex ${
        isSidebarOpen ? "flex-row gap-3" : "flex-col gap-1"
        } items-center hover:bg-gray-50 rounded-lg`}>

            <Icon className={`${isSidebarOpen ? "h-5 w-5" : "h-6 w-6"} text-gray-600`} />

        <span 
            className={`text-gray-700 ${isSidebarOpen ? "text-sm" : "text-xs text-center"}`}
        >
            {children}
        </span>
    </button>
    );
};

const SidebarLeft = ({ isSidebarOpen}) => {

    return (
        <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)]   
            ${isSidebarOpen ? "w-64" : "w-16" } 
            border-r border-gray-200 transform transition-all duration-200 ease-in-out lg:translate-x-0`}
        >
            <div className="p-4 space-y-4">
                {/* Online Button */}
                <Btn className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 rounded-lg"
                    icon={({ className }) => (
                        <Dot className={`text-green-600 ${className}`} />
                    )}
                    isSidebarOpen={isSidebarOpen}
                >
                    Online
                </Btn>

                {/* Other Buttons */}
                <Btn icon={Tv} isSidebarOpen={isSidebarOpen}>Live Streams</Btn>
                <Btn icon={Users} isSidebarOpen={isSidebarOpen}>Following</Btn>
                <Btn icon={TrendingUp} isSidebarOpen={isSidebarOpen}>Trending</Btn>
                <Btn icon={Bookmark} isSidebarOpen={isSidebarOpen}>Saved Streams</Btn>
            </div>
            
        </div>
    ); 
};

export default SidebarLeft;