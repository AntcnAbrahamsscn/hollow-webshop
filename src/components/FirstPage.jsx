import React, { useEffect } from "react";
import "../stylesheets/first-page.css";
import LandingSection from "./LandingSection";
import ShopSection from "./ShopSection";

export default function FirstPage() {

    useEffect(() => {
        const parallaxEffect = () => {
            const parallaxBg = document.querySelector(".parallax-bg");
            const scrolled = window.scrollY;
            const speed = scrolled * 0.3;
            parallaxBg.style.transform = `translate3d(0, ${-speed}px, 0)`;
        };

        window.addEventListener("scroll", parallaxEffect);

        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        };
    }, []);

    return (
        <div className="mainPage">
            <LandingSection />
            <ShopSection />
        </div>
    );
}
