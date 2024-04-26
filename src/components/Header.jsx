import React from "react";
import logo from "../assets/logotypes/logotype.svg";
import "../stylesheets/header.css";

export default function Header() {
    return (
        <nav className="firstPageNav">
            <img src={logo} alt="" />
            <ul>
                <li>
                    <a href="">
                        <i className="fa-solid fa-lines-leaning navIcon"></i>Kites
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-solid fa-address-card navIcon"></i>About us
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-solid fa-cart-shopping navIcon"></i>Cart
                    </a>
                </li>
            </ul>
            <div className="bars-icon hide"><i className="fa-solid fa-bars"></i></div>
        </nav>
    );
}