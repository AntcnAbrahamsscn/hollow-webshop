import React from "react";
// Imgs
import logo from "../assets/logotypes/logotype.svg";
// Css
import "../stylesheets/header.css";

export default function Header() {
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>
                    <a href="">
                        <i className="fa-solid fa-lines-leaning"></i>Kites
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-solid fa-address-card"></i>About us
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>Cart
                    </a>
                </li>
            </ul>
            <div className="bars-icon"><i className="fa-solid fa-bars"></i></div>
        </nav>
    );
}