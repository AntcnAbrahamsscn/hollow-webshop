import React, { useEffect, useState } from "react";
import "./first-page.css";
import LandingSection from "../LandingSection/LandingSection.jsx";
import HamburgerOverlay from "../HamburgerOverlay/HamburgerOverlay.jsx";
import ShopSection from "../ShopSection/ShopSection.jsx";
import { useStore } from "../../data/store.js";
import { Link } from "react-router-dom";

export default function FirstPage() {
    // TODO: Lägg till showButtons/ showAdd till zustand, fråga först David.
    const [showButtons, setShowButtons] = useState(false);
    const [showAdd, setShowAdd] = useState(true);
    const isHamburgerOpen = useStore((state) => state.isHamburgerOpen);

    return (
        <div className="mainPage">
            <HamburgerOverlay isOpen={isHamburgerOpen} />
            <LandingSection />
            <ShopSection showButtons={showButtons} showAdd={showAdd} />
            <Link to="/Login">
                <div style={{margin: "1em auto"}}> Admin login</div>
            </Link>
        </div>
    );
}
