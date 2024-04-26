import React, {  useState } from "react";
import { useStore } from "../data/store.js";
import {  getKites, deleteKite } from "../data/crud.js";

export default function ItemContainer({ kite, showButtons }) {
    const [isLoading, setIsLoading] = useState(false)
    const setKites = useStore((state) => state.setKites);



    const handleDelete = async () => {
		setIsLoading(true)
		await deleteKite(kite.key)
		const kitesFromDb = await getKites()
		setKites(kitesFromDb)
		setIsLoading(false)
	}

    return (
        <div key={kite.key} className="itemContainer">
            <img src={kite.img} alt={kite.name} />
            <p>{kite.name}</p>
            <p>{kite.price}</p>
            {showButtons && (
                <div>
                    <button>Edit</button>
                    <button disabled={isLoading} onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}
