//import UserImg from "../../assets/idalia.jpg";
import { ChevronDown, User, Settings, Key, Trash2, LogOut, } from "lucide-react";

// Profile Drop-down, right side
const ProfileDropdown = ({ toggleDropdown, isDropdownOpen }) => {
    return (
    <div className="relative">
        <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
        >
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <User className="h-5 w-5 text-gray-600" />

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
            <ChevronDown className="h-4 w-4 text-gray-600" />
        </button>
        {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                {/* Dropdown Menu*/}
                <div className="py-1">
                    <button className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-50">
                        <User className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Profile</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-50">
                        <Settings className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Settings</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-50">
                        <Key className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Change Password</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-50">
                        <Trash2 className="h-4 w-4 text-gray-600" />
                        <span className="text-red-700">Delete Account</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left flex items-center gap-3  hover:bg-gray-50">
                        <LogOut className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">LogOut</span>
                    </button>
                </div>
            </div>
        )}
    </div>
);};

export default ProfileDropdown;