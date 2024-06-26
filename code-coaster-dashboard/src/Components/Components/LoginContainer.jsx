import "./LoginContainer.css";
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
    const navigate = useNavigate();
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        const response = await fetch('https://3wf32sqmhl.execute-api.us-east-1.amazonaws.com/login/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, contraseña })
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            navigate("/dashboard");
        } 
        else {
            setErrorMessage("Error de autenticación: Usuario no permitido o contraseña incorrecta.");
        }
    };

    return (
        <>
            <div className="login-container">
                <div className="header">
                    <div className="aulify-games-logo-container">
                        <img className="aulify-games-logo" src="src/UI/aulify-games-logo.png" alt="Aulify Games Logo" />
                    </div>
                </div>
                <div className="logo-container">
                    <img className="login-image" src="src/UI/code-coaster-logo.png" alt="Code Coaster Logo" />
                </div>
                <div className="button-container">
                    {!showLoginForm ? (
                        <button className="loginButton" onClick={handleLoginClick}>Iniciar sesión</button>
                    ) : (
                        <form className="loginForm" onSubmit={handleLoginSubmit}>
                            <div><input type="text" name="correo" placeholder="Correo" required value={correo} onChange={e => setCorreo(e.target.value)} /></div>
                            <div><input type="password" name="contraseña" placeholder="Contraseña" required value={contraseña} onChange={e => setContraseña(e.target.value)} /></div>
                            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
                            <div><button type="submit">Continuar</button></div>
                        </form>

                    )}
                </div>
            </div>
        </>
    );
};

export default LoginContainer;
