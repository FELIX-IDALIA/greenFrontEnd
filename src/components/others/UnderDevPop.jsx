{/* Under development popup */}

const UnderDevPop = ({ showPopup }) => {
    return (
    <div 
        className={`fixed bg-gray-800 text-white text-sm rounded-lg py-2 px-4 shadow-lg z-50 transition-opacity duration-200 ease-in-out ${
            showPopup.show ? "opacity-100" : "opacity-0"
            }`}
       style={{
            left: `min(calc(100vw - 10px), max(10px, ${showPopup.x}px))`,   // Prevent overflow 
            top: `${showPopup.y - 45}px`, // Position above the button
            transform: "translateX(-50%)", // Center horinzontally 
       }} 
    >
        Coming soon!
    </div>
    );
};

export default UnderDevPop;