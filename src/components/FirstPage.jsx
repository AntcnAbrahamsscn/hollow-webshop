import React, { useEffect, useState } from "react";
import "../stylesheets/first-page.css";
import LandingSection from "./LandingSection";
import HamburgerOverlay from "./HamburgerOverlay"
import ShopSection from "./ShopSection";
import { useStore } from "../data/store.js"; 

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
        </div>
    );
}
