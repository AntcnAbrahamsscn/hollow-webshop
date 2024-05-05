import React, { useState, useEffect } from "react";
import ItemContainer from "../ItemContainer/ItemContainer.jsx";
import { useStore } from "../../data/store.js";
import { getKites } from "../../data/crud.js";
import "./shop-container.css";
import FilterContainer from "../FilterContainer/FilterContainer.jsx";

export default function ShopContainer({ showButtons, showAdd }) {
    const { kites, setKites } = useStore();
    const [filteredKites, setFilteredKites] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const kitesData = await getKites();
            setKites(kitesData);
            setFilteredKites(kitesData);
        };
        fetchData();
    }, [setKites]);

    return (
        <div>
            <FilterContainer kites={kites} setFilteredKites={setFilteredKites} />
            <div className="shopContainer">
                {filteredKites.map((kite) => (
                    <ItemContainer
                        key={kite.key}
                        kite={kite}
                        showButtons={showButtons}
                        showAdd={showAdd}
                    />
                ))}
            </div>
        </div>
    );
}
