import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logotypes/logotype.svg";

import "./login-page.css";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("  ");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            navigate("/Admin");
        } else {
            setError("Invalid username or password.");
        }
    };

    const isDisabled = !username || !password;

    return (
        <div id="loginPage">
            <div className="loginContainer">
            <div className="formHeader">
                        <img src={logo} alt="logotype" />{" "}
                        <button><Link  to="/">
                            <i className="fa-solid fa-xmark"></i></Link>
                        </button>
                    </div>
                <form className="loginForm" onSubmit={handleLogin}>
                    
                    <div className="inputContainer">
                        <input
                            placeholder="Username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="inputContainer">
                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    {error && (
                        <p style={{ color: "var(--accent-color)", marginBottom: "2em", marginTop: "0.5em" }}>
                            {error}
                        </p>
                    )}
                    
                    <div className="buttonFormContainer">
                        {isDisabled ? (
                            <button className="primaryButton" disabled>Login</button>
                        ) : (
                            <button className="primaryButton" type="submit">Login</button>
                        )}
                        <p>Forgot password?</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
