import { Link, Outlet } from "react-router-dom";
import React from "react";



const Root = () => {
    return (
        <div >
            <main >
                <Outlet />
            </main>
            <footer
                style={{
                    display: "flex",
                    gap: "1em",
                    justifyContent: "center",
                }}
            >
                <Link to="/" className="nav-link-style">
                    <p>Firstpage </p>
                </Link>
                <Link to="/Admin" className="nav-link-style">
                    <p>Admin </p>
                </Link>
                <Link to="/Login" className="nav-link-style">
                    <p>Login </p>
                </Link>
                <Link to="/Cart" className="nav-link-style">
                    <p>Cart </p>
                </Link>
            </footer>
        </div>
    );
};

export default Root;
