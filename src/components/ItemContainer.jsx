import React, { useState } from "react";
import { useStore } from "../data/store.js";
import { getKites, deleteKite } from "../data/crud.js";

export default function ItemContainer({ kite, showButtons, showAdd }) {
    const [isLoading, setIsLoading] = useState(false);
    const setKites = useStore((state) => state.setKites);

    const handleDelete = async () => {
        setIsLoading(true);
        await deleteKite(kite.key);
        const kitesFromDb = await getKites();
        setKites(kitesFromDb);
        setIsLoading(false);
    };

    return (
        <div key={kite.key} className="itemContainer">
            <img src={kite.img} alt={kite.name} />

            <div className="itemContent">
                {/* TODO: Lyft ut detta till css stylesheetp
                 */}
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div>
                        <h4>{kite.name}</h4>
                        <p>{kite.price} £</p>
                    </div>
                    {showAdd && (
                        <button className="addButton description">
                            <i className="fa-solid fa-plus"></i>{" "}
                        </button>
                    )}
                </div>
                <p className="description">{kite.description}</p>{" "}
            </div>
            {showButtons && (
                <div className="buttonContainer">
                    <button><i class="fa-regular fa-pen-to-square"></i>{" "}</button>
                    <button disabled={isLoading} onClick={handleDelete}>
                    <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            )}
        </div>
    );
}
