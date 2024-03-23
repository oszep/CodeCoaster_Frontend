import "./LoginContainer.css";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";


function LoginContainer() {
    const navigate = useNavigate();
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };
    return (
        <>
            <div className="login-container">
                <div className="header">
                    <img className="aulify-games-logo" src="src/UI/aulify-games-logo.png" alt="Aulify Games Logo" />
                </div>
                <div className="logo-container">
                    <img className="login-image" src="src/UI/code-coaster-logo.png" alt="Code Coaster Logo" />
                </div>
                <div className="button-container">
                    {!showLoginForm ? (
                        <button className="loginButton" onClick={handleLoginClick}>Iniciar sesión</button>
                    ) : (
                        <form className="loginForm">
                            <input type="text" placeholder="Email" required />
                            <input type="password" placeholder="Contraseña" required />
                            <button type="submit" onClick={handleLoginSubmit}>Continuar</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    )
}

export default LoginContainer;
