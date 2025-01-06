import { useState } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
    const [redirect, setRedirect ] = useState(false); // State to manage after logout

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token from localStorage
        setRedirect(true); // Set the redirect flag to true
    };

    // Redirect the user to the login page if they are logged out
    if (redirect) {
        return <Navigate to="/" replace />;
    }

    return (
        <button
            onClick={handleLogout}
            className="mt-4 bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
            Logout
        </button>
    )
};

export default Logout;