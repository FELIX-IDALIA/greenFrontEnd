//import UserImg from "../../assets/idalia.jpg";
import { ChevronDown, User, Settings, Key, Trash2, LogOut, } from "lucide-react";
import { Navigate } from "react-router-dom";


// Profile Drop-down, right side
const ProfileDropdown = ({ toggleDropdown, isDropdownOpen, handleLogout, redirect, handleShowProfile }) => {
    // Redirect the user to the login page if they are logged out
    if (redirect) {
        return <Navigate to="/" replace />;
    }

    return (
    <div className="relative">
        <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
        >
            <div className="flex flex-col items-center">
            <div className="h-7 w-7 rounded-full bg-gray-200 flex  items-center justify-center overflow-hidden">
                <User className="h-4 w-4 text-gray-600" />
                

                {/*
                {UserImg ? (
                    <img 
                        src={UserImg}
                        alt="User img"
                        className="h-full w-full object-cover"
                    />
                ): (
                    <User className="h-5 w-5 text-gray-600" />
                )
            } */}
            </div>
            <span className="mt-1 text-sm text-gray-600">Account</span>

            </div>
            <ChevronDown className="h-4 w-4 text-gray-600" />
        </button>
        {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                {/* Dropdown Menu*/}
                <div className="py-1">
                    
                    {/* Button to toggle profile */}
                    <button 
                        className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-300"
                        onClick={handleShowProfile}
                    >
                        <User className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Profile</span>
                    </button>
                    
                    

                    <button className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-300">
                        <Settings className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Settings</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-300">
                        <Key className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Change Password</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-50">
                        <Trash2 className="h-4 w-4 text-gray-600" />
                        <span className="text-red-700">Delete Account</span>
                    </button>
                    <button 
                        className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-300"
                        onClick={handleLogout}
                    >
                        <LogOut className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">LogOut</span>
                    </button>
                </div>
            </div>
        )}
    </div>
);};

export default ProfileDropdown;