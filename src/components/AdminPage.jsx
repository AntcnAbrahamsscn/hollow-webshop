import "../stylesheets/admin-page.css";
import ShopContainer from "./ShopContainer";
import AdminHeader from "./AdminHeader";
import React, { useState, useEffect } from "react";
import AddItemForm from "./AddItemForm.jsx";
import { parallaxEffect } from "../data/parallaxEffect.js";

export default function AdminPage() {
    const [showButtons, setShowButtons] = useState(true);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", parallaxEffect);

        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        };
    }, []);

    return (
        <section>
            <section className="adminLanding">
            <AdminHeader />
                <div className="parallax-bg"></div>
            </section>
            <div id="admin">
                <AddItemForm />
                <ShopContainer showButtons={showButtons} showAdd={showAdd}/>
            </div>
        </section>
    );
}
