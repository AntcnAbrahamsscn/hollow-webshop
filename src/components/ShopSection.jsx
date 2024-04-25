import React from "react";
import { useStore } from "../data/store";
import { getKites } from "../data/crud";

import "../stylesheets/shop-section.css"

export default function ShopSection() {
    const { kites, setKites } = useStore();


    const handleClick = async () => {
        const kitesData = await getKites();
        setKites(kitesData);
    };


  return (
    <section id="shop">
                <button onClick={handleClick}>Funkar det??</button>
                <div className="filterContainer">
                    <i className="fa-solid fa-magnifying-glass"></i>

                    <input type="text" placeholder="Type to search.." />
                    <div>
                        <p>sort by: popular</p>
                    </div>
                </div>
                <div className="shopContainer">
                    {kites.map((kite) => (
                        <div key={kite.key} className="itemContainer">
                            <img src={kite.img} alt={kite.name} />
                            <p>{kite.name}</p>
                            <p>{kite.price}</p>
                        </div>
                    ))}
                </div>
            </section>
  )
}
