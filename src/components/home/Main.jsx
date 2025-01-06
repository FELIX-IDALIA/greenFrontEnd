// Main Content
const Main = ({ isSidebarOpen }) => {
    return (
        <main
            className={`pt-16 pb-20 lg:ml-64 lg:mr-64 
                ${isSidebarOpen ? "ml-0 lg:ml-64" : '' }
                transition-margin duration-200 ease-in-out
                `}
        >
            <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-800">Welcome to GreenLive!</h1>
                <p className="mt-2 text-gray-600">Start streaming or watch other creators live.</p>
            </div>
        </main>
    );
};

export default Main;