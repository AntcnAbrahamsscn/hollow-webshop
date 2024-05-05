import React from "react";
import { useStore } from "../../data/store.js";
import { Link } from "react-router-dom";

export default function HamburgerOverlay({ isOpen }) {
    const toggleHamburger = useStore((state) => state.toggleHamburger);

    if (!isOpen) return null;

    const handleCloseOverlay = () => {
        toggleHamburger();
    };
    return (
        <section
            style={{
                backgroundColor: "var(--secondary-text-color",
                height: "100vh",
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 999,
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            }}
        >
            <button onClick={handleCloseOverlay}>
                <i
                    style={{ position: "absolute", right: "1em", top: "1em" }}
                    className="fa-regular fa-circle-xmark"
                ></i>
            </button>
            <ul>
            <Link to="/" >
                 <li>
                    
                        <i className="fa-solid fa-cart-shopping navIcon"></i>Kites
                    
                </li></Link>
            
                <Link to="/Cart">
                    <li>
                        <i className="fa-solid fa-cart-shopping navIcon"></i>
                        Cart
                    </li>
                </Link>
            </ul>
        </section>
    );
}
