import React from "react";
import logo from "../assets/logotypes/logotype.svg";
import "../stylesheets/admin-header.css"


export default function AdminHeader() {
    return (
        <nav>
            <img src={logo} />
            <i class="fa-solid fa-right-from-bracket"></i>
        </nav>
    );
}
