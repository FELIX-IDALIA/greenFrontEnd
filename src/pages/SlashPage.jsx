import LeftDisplay from "../components/slash/LeftDisplay.jsx";
import RightDisplay from "../components/slash/RightDisplay.jsx";

const SlashPage = () => {
    

    return (
        <>
        <div className="flex overflow-hidden h-screen">
            {/* Left section: Information */}
                <LeftDisplay />

            {/* Right section: Forms */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4">
                    <RightDisplay />
                </div>
        </div>
        
        </>
        
    );
};

export default SlashPage;