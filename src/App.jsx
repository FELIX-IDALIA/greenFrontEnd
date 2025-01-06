import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/home" element={
            <PrivateRoute>
              <HomePage />  {/*Protected route*/}
            </PrivateRoute>
        }
        />
      </Routes>
    </Router>
   
  );
};

export default App;
