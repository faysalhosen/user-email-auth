import { useState } from "react";



const Login = () => {
    const [showPassword,setShowPassword] = useState("Hello world")

    return (
        <div>
            <h1>this is login</h1>
            <p> {showPassword}</p>
            
        </div>
    );
};

export default Login;