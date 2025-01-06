// Shows when button is disabled
const BtnDisabled = ({msgBtnDisabled, children }) => {
    return (
        <div className="relative">
        {children}
        {msgBtnDisabled && 
            <span
                className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500"
                style={{ visibility: msgBtnDisabled ? "visible" : "hidden"}}
            >
                under Development
            </span>
        }
        </div>
    );
};

export default BtnDisabled;