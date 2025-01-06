import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Install with 'npm install jwt-decode'

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token"); // Retrieve the token 

    if (token) {
        try {
            const decodedToken = jwtDecode(token); // Decode the token
            const isExpired = decodedToken.exp * 1000 < Date.now(); // Check Expiration

            if (!isExpired) {
                return children; // Render the protected component
            }
        } catch (error) {
            console.error("Invalid token:", error);
        }
    }

    // If token is missing or expired, redirect to login
    return <Navigate to="/" replace/>;
}

export default PrivateRoute;