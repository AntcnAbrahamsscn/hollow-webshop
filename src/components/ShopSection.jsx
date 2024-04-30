import React from "react";
import "../stylesheets/shop-section.css";
import ShopContainer from "./ShopContainer";

export default function ShopSection({showButtons, showAdd}) {
    
  

    return (
        <section id="shop">
            <ShopContainer showButtons={showButtons} showAdd={showAdd}/>
        </section>
    );
}
