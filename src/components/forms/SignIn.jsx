import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setForm }) => {

    const initialData = {
        email: "",
        password:"" 

    };

    const [message, setMessage] = useState(null);
    const [formData, setFormData] = useState(initialData);
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [isDisabled, setIsDisabled] = useState(false); // Disable state
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        });
    };

    const formError = (data) => {
        setSubmissionStatus("error");
        setMessage(data.message);
        
        // Disable the button during retry timeout
        setIsDisabled(true);
        

        if (data.message === "User not found! Please Sign Up to continue") {
                setFormData(initialData);
            setTimeout(() => {
                setMessage(null);
                setSubmissionStatus(null);
                setIsDisabled(false); // Re-enable after timeout
                
            }, 5000);
            return; // Exit after handling "user not found"
        }
        
        // Clears only the password field leaving the email intact
        setFormData(prevFormData => ({
            ...prevFormData,
            password:"" // Resets the password
        }));


        setTimeout(() => {
            let timeLeft = 5;
            const countdownInterval = setInterval(() => {
                
                setMessage(`Try again in ${timeLeft} seconds...`);
                timeLeft--;

                if (timeLeft < 0) {
                    clearInterval(countdownInterval);
                    setMessage(null);
                    setSubmissionStatus(null);
                    setIsDisabled(false); // Re-enable button after retry finishes
                    
                }
            }, 1000);
        }, 3000);

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Set loading state
        setIsDisabled(true); // Disable the button during the request
        

       try {
            const response = await fetch("https://e548-154-159-237-105.ngrok-free.app/Account/SignIn", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(formData)
            });

            const data = await response.json()

            if (response.ok) {
                // Save the token in localstorage
                localStorage.setItem("token", data.token);

                // alert with response
                alert(data.message);

                // Navigate to home
                navigate("/home");
            }
            else {
                formError(data);
            }

        } catch (error) {
            setSubmissionStatus("error");
            console.error("An error occured", error);
            formError({ message: "Failed to submit!"});

        } finally {
            setIsLoading(false); // Reset loading state after request
        }
    };

   

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-4">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Welcome Back</h2>

                <form className="space-y-6" onSubmit={handleSubmit} >
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input 
                            id="email" 
                            type="email" 
                            name="email"
                            disabled={isDisabled}
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="Enter email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input 
                            id="password" 
                            type="password"
                            name="password"
                            disabled={isDisabled}
                            onChange={handleChange}
                            value={formData.password} 
                            placeholder="Enter password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                            required
                        />
                    </div>
                    
                    {!isLoading ? (
                        <button
                            type="submit"
                            className={`w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-4 ${
                                        isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                                    }`}
                                    disabled={isDisabled}   // Button is disabled during loading or retry

                        >
                            Sign In
                        </button>
                    ): (
                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    )}

                   {submissionStatus === "error" && 
                        <p className="font-medium text-red-500">
                            {message}
                        </p>
                    }

                </form>

                <p className="text-center mt-6 text-gray-700 font-medium">
                    Don't have an account?{' '}
                    <button 
                        onClick={() => setForm("signUp")}
                        className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignIn;