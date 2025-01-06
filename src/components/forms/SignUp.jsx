import React, { useState } from "react";

const SignUp = ({ setForm }) => {
        const initialData = {
            name: "",
            username: "",
            email: "",
            password: ""
        };

        const [formData, setFormData] = useState(initialData);
        const [message, setMessage] = useState(null);
        const [submissionStatus, setSubmissionStatus] = useState(null);
        const [buttonText, setButtonText] = useState("Sign Up");

        const formSuccess = () => {
            setTimeout(() => {
                setFormData(initialData);
                setMessage("Click on Sign In to continue.");
                setButtonText("Sign Up");
            }, 5000);
        };

        const formError = () => {
            setTimeout(() => {
                let timeLeft = 5;
                const countdownInterval = setInterval(() => {
                    setMessage(`Try again in ${timeLeft} seconds...`);
                    timeLeft--;

                    if (timeLeft < 0) {
                        clearInterval(countdownInterval);
                        setMessage(null);
                        setSubmissionStatus(null);
                        setButtonText("Sign Up");
                    }
                }, 1000);
            }, 3000);

        };

        const handleSubmit = async (event) => {
            event.preventDefault(); // Prevent form default function
            setButtonText("Submitting...");

            try {
                const response = await fetch("http://localhost:3000/api/user/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (response.ok) {
                    setMessage(data.message);
                    setSubmissionStatus("success");
                    formSuccess();

                } else {
                    setMessage(data.message);
                    setSubmissionStatus("error");
                    formError();
                    
                }


            } catch(error) {
                setMessage("Filed to submit");
                setSubmissionStatus("error");
                console.error("An error occured", error);
                formError();

            }

        };

        const handleChange = (event) => {
            setFormData({
                ...formData, [event.target.name]: event.target.value
            });
        };

        

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Create account</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-gray-700  font-medium mb-2">
                            Name
                        </label>
                        <input 
                            id="name"  
                            name="name" 
                            type="text" 
                            onChange={handleChange}
                            value={formData.name}
                            placeholder="Enter your name" 
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-gray-700  font-medium mb-2">
                            Username
                        </label>
                        <input 
                            id="username" 
                            name="username" 
                            type="text" 
                            onChange={handleChange}
                            value={formData.username}
                            placeholder="Enter username" 
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email"
                            onChange={handleChange}
                            value={formData.email} 
                            placeholder="Enter your email" 
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password"
                            onChange={handleChange}
                            value={formData.password} 
                            placeholder="Enter password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>

                    {!message && (
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-4"
                        >
                            {buttonText}
                        </button>
                    )}

                    {message && (
                        <p
                            className={`font-medium ${
                                submissionStatus === "success" ? "text-green-500" : "text-red-500"
                            }`} 
                        >
                            {message}
                        </p>
                    

                    )}
                </form>

                <p className="text-center mt-6 text-gray-700 font-medium">
                    Have an account?{' '}
                    <button 
                        onClick={() => setForm("signIn")}
                        className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUp;