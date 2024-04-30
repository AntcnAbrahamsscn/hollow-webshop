import React from "react";
import logo from "../assets/logotypes/logotype.svg";
import "../stylesheets/header.css";
import { useStore } from "../data/store.js"; 


export default function Header() {
    const isHamburgerOpen = useStore((state) => state.isHamburgerOpen);
    const toggleHamburger = useStore((state) => state.toggleHamburger);

    return (
        <nav className="firstPageNav">
            <img src={logo} alt="" />
            <ul>
                <li>
                    <a href="">
                        <i className="fa-solid fa-lines-leaning navIcon"></i>Kites
                    </a>
                </li>
                {/* <li>
                    <a href="">
                        <i className="fa-solid fa-address-card navIcon"></i>About us
                    </a>
                </li> */}
                <li>
                    <a href="">
                        <i className="fa-solid fa-cart-shopping navIcon"></i>Cart
                    </a>
                </li>
            </ul>
           <div onClick={toggleHamburger} > <div className="bars-icon hide"><i className="fa-solid fa-bars"></i></div></div>
        </nav>
    );
}