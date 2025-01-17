//import { Menu, ChevronDown, User, Video, History, Tv, Users, TrendingUp, BookMark, MessageSquare, } from "lucide-react";
//import Profile from "../components/home/Profile.jsx";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/home/Header.jsx";
import LeftSideTB from "../components/home/LeftSideTB.jsx";
import AccountDropdown from "../components/home/AccountDropdown.jsx";
import SidebarLeft from "../components/home/SidebarLeft.jsx";
import MsgSidebar from "../components/home/MsgSidebar.jsx";
import Main from "../components/home/Main.jsx";
import ActionFooter from "../components/home/ActionFooter.jsx";
import FloatingMsgBtn from "../components/home/FloatingMsgBtn.jsx";
import SearchBar from "../components/home/SearchBar.jsx";

const HomePage = () => {
   
    
    {/* Navigate */}
    const navigate = useNavigate();

    {/* State to manage search */}
    const [searchQuery, setSearchQuery] = useState("");

    {/* Example message count (Mock data)*/}
    const [newMessages, setNewMessages] = useState(5);

    {/* Example live streams count (Mock data)*/}
    const [liveStreams, setLiveStreams] = useState(0);

    {/* Example following count (mock data)*/}
    const [following, setFollowing] = useState(100);

    {/* Example trending count (mock data)*/}
    const [trending, setTrending] = useState(0);

    {/* Example saved Streams count (mock data)*/}
    const [savedStreams, setSavedStreams] = useState(21);

    //const [activeComponent, setActiveComponent] = useState("main"); // Tracks active view
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [isMessagesOpen, setMessagesOpen] = useState(false);
    const [messages, setMessages] = useState([]);   // Stores messages
    const [message, setMessage] = useState(""); // To manage the message input
    const [showPopup, setShowPopup] = useState({ show: false, x: 0, y: 0}); // State for popup visibility
    const[msgBtnDisabled, setMsgBtnDisabled] = useState(true);
    

    // State to manage after Logout
    const [redirect, setRedirect] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    {/* Toggle mock messages */}
    const toggleMessages = () => {
            console.log("Messages clicked!");
            setMessagesOpen(!isMessagesOpen);
            setNewMessages(0); // Resets Messages (mock data)
        
    };


    //const handleShowMain = () => setActiveComponent("main"); // Switch to main
    const handleShowProfile = () => navigate("/home/profile"); // Switch to profile

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

    // Function to handle search
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Function to handle go live
    const handleGoLive = () => navigate("/home/goLive");

     {/* Function to generate a random number for mock data*/}
     const generateRandomNumber = (maxVal, minVal) => {
        return Math.floor((Math.random() * (maxVal - minVal)) + minVal); // Random number between 1 and 200
    };

    {/* Hook to Update the liveStreams state every 3 seconds */}
        useEffect(() => {
            const interval = setInterval(() => {
                setLiveStreams(generateRandomNumber(200, 1));
                setTrending(generateRandomNumber(150, 50));
            }, 3000);

            // Cleanup interval on component unmount
            return () => clearInterval(interval);
        }, [])
    



    

    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Header */}
            <Header>

                {/* Sidebar Toggle Button */}
                <LeftSideTB 
                    toggleSidebar={toggleSidebar}
                /> 

                {/* SearchBar */}
                <SearchBar value={searchQuery} onChange={handleSearchChange} />

                {/* Profile Dropdown */}
                <AccountDropdown 
                    toggleDropdown={toggleDropdown} 
                    isDropdownOpen={isDropdownOpen}
                    handleLogout={handleLogout}
                    redirect={redirect}
                    handleShowProfile={handleShowProfile}
                />  

                {/* Sidebar */}
                <SidebarLeft 
                    isSidebarOpen={isSidebarOpen} 
                    liveStreams={liveStreams}
                    following={following}
                    trending={trending}
                    savedStreams={savedStreams}
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
            {/* Main */}
            <Main 
                isSidebarOpen={isSidebarOpen} 
            /> 

            
            
             

            {/* Action Footer */}
            <ActionFooter 
                handleButtonClick={handleButtonClick} 
                showPopup={showPopup}
                isSidebarOpen={isSidebarOpen}
                handleGoLive={handleGoLive}
            />    

            {/* Floating Messages Button */}
            <FloatingMsgBtn 
                toggleMessages={toggleMessages} 
                newMessages={newMessages}
            /> 

        </div>
    );
}

export default HomePage;


{/*
            Conditional Rendering for Main or Profile 
            {activeComponent === "main" && (
                <Main isSidebarOpen={isSidebarOpen} />
            )}
            {activeComponent === "profile" && (
                <Profile onBack={handleShowMain} /> // Pass back handle to Profile
            )}
            */}