import React from "react";
import logo from "../../assets/logotypes/logotype.svg";
import { Link } from "react-router-dom";

import "./admin-header.css"


export default function AdminHeader() {
    return (
        <nav className="adminNav">
            <img src={logo} />
            <Link to="/"><i className="fa-solid fa-right-from-bracket"></i></Link> 
            
          
        </nav>
    );
}
