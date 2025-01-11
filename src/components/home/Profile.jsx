import React, { useState, useEffect,  } from "react";


const Profile =  () => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch("http://localhost:3000/home/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`, // Pass token to authenticate user
                    },
                });
        
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                    console.log("User Data:", data);
                
                }
                else {
                    console.log("Error fetching user data:", await response.text());
                }
        
            } catch(error) {
                console.error("An error occured while fetching user data:", error);
        
            }
        };

        fetchUserProfile();
    }, []);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setUser({ ...user, [name]: value });
        };

        const handleEdit = () => {
            setIsEditing(true);
        };

        const handleSave = async () => {
            try {
                await axios.put(`/api/user/${user._id}`, user);
                setIsEditing(false);
            } catch (error) {
                console.error("Error saving user data:", error);
            }
        };

        const handleCancel = () => {
            setUser({ ...user });
            setIsEditing(false);
        };

        if (!user) {
            return (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            );
        }
            return (
                <div className="min-h-screen bg-gray-100 flex flex-col">
                    {/* Header */}
                    <header className="bg-white shadow-md">
                        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-800">GreenLive</h1>
                            <nav className="flex space-x-4">
                                <a href="/home" className="text-gray-700 hover:text-gray-900">
                                    Home
                                </a>
                                <a href="/profile" className="text-gray-700 hover:text-gray-900">
                                    Profile
                                </a>
                                <a href="/settings" className="text-gray-700 hover:text-gray-900">
                                    Settings
                                </a>
                            </nav>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="flex-1 container mx-auto px-6 py-8">
                        <div className="bg-white p-8 shadow-lg rounded-md">
                            <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
                            <p className="mt-2 text-gray-600">Manage your account details below</p>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block font-semibold text-gray-700">Name:</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={user.name}
                                            onChange={handleChange}
                                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                            disabled
                                        />
                                    ) : (
                                        <p className="mt-1 text-gray-600">{user.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block font-semibold text-gray-700">Email:</label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    ) : (
                                        <p className="mt-1 text-gray-600">{user.email}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end space-x-4">
                                    {isEditing ? (
                                        <>
                                            <button
                                                onClick={handleSave}
                                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-not-allowed"
                                                disabled
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={handleCancel}
                                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 cursor-not-allowed"
                                                disabled
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button 
                                            onClick={handleEdit}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-not-allowed"
                                            disabled
                                        >
                                            Edit
                                        </button>
                                    )}
                            </div>
                        </div>
                    </main>
                </div>
    );
};

export default Profile;



                
    