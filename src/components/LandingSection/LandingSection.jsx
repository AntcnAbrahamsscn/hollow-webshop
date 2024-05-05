import React, { useEffect } from "react";
import Header from "../Header/Header";
import "./landing-section.css"
import { parallaxEffect } from "../../data/parallaxEffect";


export default function LandingPage() {
    useEffect(() => {
        window.addEventListener("scroll", parallaxEffect);

        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        };
    }, []);

    return (
        <section id="landingPage">
            <Header />
            <div className="parallax-bg"></div>
        </section>
    );
}
