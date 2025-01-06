import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NoAccess from "./components/protected/NoAccess.jsx";
import SlashPage from './pages/SlashPage.jsx';
import SignIn from "./components/forms/SignIn.jsx";
import SignUp from "./components/forms/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";



import PrivateRoute from "./components/protected/PrivateRoute.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public route*/}
        <Route path="/" element={<SlashPage/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/unauthorized" element={
            <PrivateRoute>
              <NoAccess />  {/*Protected route*/}
            </PrivateRoute>
        }
        />
      </Routes>
    </Router>
   
  );
};

export default App;
