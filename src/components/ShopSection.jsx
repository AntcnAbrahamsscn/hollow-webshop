import React from "react";


import "../stylesheets/shop-section.css";
// import ItemContainer from "./ItemContainer";
import FilterContainer from "./FilterContainer";
import ShopContainer from "./ShopContainer";



export default function ShopSection({showButtons}) {
    
  

    return (
        <section id="shop">
            <FilterContainer />
            <ShopContainer showButtons={showButtons}/>
        </section>
    );
}
