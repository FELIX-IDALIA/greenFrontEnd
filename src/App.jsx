import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import GetActiveStreams from "./components/"
////import Logout from "./components/home/Logout.jsx";
import SlashPage from './pages/SlashPage.jsx';
import SignIn from "./components/forms/SignIn.jsx";
import SignUp from "./components/forms/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";
import Profile from "./components/home/Profile.jsx";
import CreateStream from "./components/streams/CreateStream.jsx";



import PrivateRoute from "./components/protected/PrivateRoute.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<SlashPage/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />

        {/* Protected route /home route and its nested child routes */}
        <Route 
            path="/home" 
            element={
              <PrivateRoute>
                <HomePage />  
              </PrivateRoute>
           }
          />

          <Route
            path="/home/profile"
            element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>   

            }
          />

          <Route 
            path="/home/goLive"
            element={
              <PrivateRoute>
                <CreateStream />
              </PrivateRoute>
            }
          />

          {/*
            <Route path="Profile"  element={<Profile />} />
            <Route path="LogOut"  element={<Logout />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="PassChange" element={<PassChange />} /> 
            <Route path="DeleteAcc"  element={<DeleteAcc />} />

            */}
        
      </Routes>
    </Router>
   
  );
};

export default App;
