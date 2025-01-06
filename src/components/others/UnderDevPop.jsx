{/* Under development popup */}

const UnderDevPop = ({ showPopup }) => {
    return (
    <div 
        className="absolute bg-gray-800 text-white text-sm rounded-lg py-2 px-4 shadow-lg"
       style={{
            left: `${showPopup.x}px`,   // Center horinzontally based on the button's position
            top: `${showPopup.y - 45}px`, // Position above the button
            transform: "translateX(-50%)", // Ensure it's horinzontally centered
       }} 
    >
        This feature is under development!
    </div>
    );
};

export default UnderDevPop;