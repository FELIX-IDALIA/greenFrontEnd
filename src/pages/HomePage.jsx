//import { Menu, ChevronDown, User, Video, History, Tv, Users, TrendingUp, BookMark, MessageSquare, } from "lucide-react";
import React, { useState } from "react";
import Header from "../components/home/Header.jsx";
import LeftSideTB from "../components/home/LeftSideTB.jsx";
import ProfileDropdown from "../components/home/ProfileDropdown.jsx";
import SidebarLeft from "../components/home/SidebarLeft.jsx";
import MsgSidebar from "../components/home/MsgSidebar.jsx";
import Main from "../components/home/Main.jsx";
import ActionFooter from "../components/home/ActionFooter.jsx";
import FloatingMsgBtn from "../components/home/FloatingMsgBtn.jsx";

const HomePage = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMessagesOpen, setMessagesOpen] = useState(false);
    const [messages, setMessages] = useState([]);   // Stores messages
    const [message, setMessage] = useState(""); // To manage the message input
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [showPopup, setShowPopup] = useState({ show: false, x: 0, y: 0}); // State for popup visibility
    const[msgBtnDisabled, setMsgBtnDisabled] = useState(true);

    // State to manage after Logout
    const [redirect, setRedirect] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const toggleMessages = () => setMessagesOpen(!isMessagesOpen);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    const handleButtonClick = (event) => {
        const buttonRect = event.target.getBoundingClientRect(); // Get button position
        setShowPopup({
            show: true,
            x: buttonRect.left + buttonRect.width / 2, // Center horinzontally
            y: buttonRect.top - 45, // Position the popup just above the button
        });

        setTimeout(() => setShowPopup({ show: false, x: 0, y: 0}), 3000); // Hide popup after 3 seconds
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log("Message Sent:", message);  // Placeholder for sending message logic
            setMessages((prev) => [...prev, {text: messages, isSender: true}]);
            setMessage(""); // Clear the input after sending
        }
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the token from localStorage
        setRedirect(true); // Set the redirect flag tp true
    };

    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Header */}
            <Header>

                {/* Sidebar Toggle Button */}
                <LeftSideTB 
                    toggleSidebar={toggleSidebar}
                /> 

                {/* Profile Dropdown */}
                <ProfileDropdown 
                    toggleDropdown={toggleDropdown} 
                    isDropdownOpen={isDropdownOpen}
                    handleLogout={handleLogout}
                    redirect={redirect}
                />  

                {/* Sidebar */}
                <SidebarLeft 
                    isSidebarOpen={isSidebarOpen} 
                /> 
            </Header>

            {/* Messages Sidebar */}
            <MsgSidebar 
                isMessagesOpen={isMessagesOpen} 
                handleSendMessage={handleSendMessage} 
                setMessage={setMessage} 
                message={message}
                messages={messages}
                msgBtnDisabled={msgBtnDisabled}
            />  

            {/* Main content */}
            <Main 
                isSidebarOpen={isSidebarOpen} 
            />  

            {/* Action Footer */}
            <ActionFooter 
                handleButtonClick={handleButtonClick} 
                showPopup={showPopup}
            />    

            {/* Floating Messages Button */}
            <FloatingMsgBtn 
                toggleMessages={toggleMessages} 
            /> 

        </div>
    );
}

export default HomePage;