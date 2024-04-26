import React, { useEffect } from "react";
import ItemContainer from "./ItemContainer";
import { useStore } from "../data/store";
import { getKites } from "../data/crud";
import "../stylesheets/shop-container.css";

export default function ShopContainer({showButtons}) {
    const { kites, setKites } = useStore();

    useEffect(() => {
        const fetchData = async () => {
            const kitesData = await getKites();
            setKites(kitesData);
        };
        fetchData();
    }, []); 

    return (
        <div className="shopContainer">
            <div className="buttonContainer">
                <button>Add item</button>
            </div>
            {kites.map((kite) => (
                <ItemContainer key={kite.key} kite={kite} showButtons={showButtons} />
            ))}
        </div>
    );
}