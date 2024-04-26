import React, { useEffect, useState } from "react";
import "../stylesheets/first-page.css";
import LandingSection from "./LandingSection";
import ShopSection from "./ShopSection";

export default function FirstPage() {
    const [showButtons, setShowButtons] = useState(false);


    

    return (
        <div className="mainPage">
            <LandingSection />
            <ShopSection showButtons={showButtons} />
        </div>
    );
}
