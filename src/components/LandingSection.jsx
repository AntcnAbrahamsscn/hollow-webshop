import React from "react";
import Header from "./Header";
import "../stylesheets/landing-section.css"

export default function LandingPage() {
    return (
        <section id="landingPage">
            <Header />
            <div className="parallax-bg"></div>
        </section>
    );
}
