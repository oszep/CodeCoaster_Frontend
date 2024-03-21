import "./LoginContainer.css"

function LoginContainer() {
    return(
        <>
            <div className="login-container">
                <div className="header">
                    <img className="aulify-games-logo" src="src/UI/aulify-games-logo.png"/>
                </div>
                <div className="logo-container">
                    <img className="login-image" src="src/UI/code-coaster-logo.png"/>
                </div>
                <div className="button-container">
                    <button className="loginButton">Iniciar sesión</button>
                    
                </div>
            </div>
        </>
    )
}

export default LoginContainer
