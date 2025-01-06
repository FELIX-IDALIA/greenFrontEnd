import React, { useState } from "react";
import SignIn from '../forms/SignIn.jsx';
import SignUp from '../forms/SignUp.jsx'

const RightDisplay = () => {
    const [form, setForm] = useState("signIn");

    return (
        <>
            {form === "signIn" ? 
                <SignIn setForm={setForm} /> : 
                <SignUp setForm={setForm} />
            }
        </>
    );
};

export default RightDisplay;