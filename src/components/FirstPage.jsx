import React, { useEffect, useState } from "react";
import "../stylesheets/first-page.css";
import LandingSection from "./LandingSection";
import HamburgerOverlay from "./HamburgerOverlay"
import ShopSection from "./ShopSection";
import { useStore } from "../data/store.js"; 

export default function FirstPage() {
    const [showButtons, setShowButtons] = useState(false);
    const isHamburgerOpen = useStore((state) => state.isHamburgerOpen);


    return (
        <div className="mainPage">
            <HamburgerOverlay isOpen={isHamburgerOpen} /> {/* Pass isOpen prop */}
            <LandingSection />
            <ShopSection showButtons={showButtons} />
        </div>
    );
}
