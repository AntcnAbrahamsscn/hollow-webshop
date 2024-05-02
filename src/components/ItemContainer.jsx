import React, { useState } from "react";
import { useStore } from "../data/store.js";
import { getKites, deleteKite, updateKite } from "../data/crud.js";

export default function ItemContainer({ kite, showButtons, showAdd }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedKite, setEditedKite] = useState(kite);
    const {addToCart} = useStore()
    const setKites = useStore((state) => state.setKites);

    const handleDelete = async () => {
        setIsLoading(true);
        await deleteKite(kite.key);
        const kitesFromDb = await getKites();
        setKites(kitesFromDb);
        setIsLoading(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsLoading(true);
        await updateKite(editedKite);
        const kitesFromDb = await getKites();
        setKites(kitesFromDb);
        setIsEditing(false);
        setIsLoading(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedKite({ ...editedKite, [name]: value });
    };

// TODO: LÄGG DENNA I EGEN KOMPONENT
    const editForm = (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
            }}
        >
            <h4>Edit item</h4>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label> Name</label>
                <input
                    type="text"
                    name="name"
                    value={editedKite.name}
                    onChange={handleInputChange}
                />
            </div>
            <div  style={{display: "flex", flexDirection: "column"}}>
                <label> Price</label>

                <input
                    type="text"
                    name="price"
                    value={editedKite.price}
                    onChange={handleInputChange}
                />
            </div>
            <div  style={{display: "flex", flexDirection: "column"}}>
                <label> Image</label>
                <input
                    type="text"
                    name="img"
                    value={editedKite.image}
                    onChange={handleInputChange}
                />
            </div>
            <div  style={{display: "flex", flexDirection: "column"}}>
                <label> Description</label>
                <input
                    name="description"
                    value={editedKite.description}
                    onChange={handleInputChange}
                    maxLength={100}
                ></input>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
// LÄGG DENNA I EGEN KOMPONENT
    const itemInfo = (
        <div>
            {" "}
            <img src={kite.img} alt={kite.name} />
            <div className="itemContent">
                {/* TODO: Lyft ut detta till css stylesheetp */}
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ marginBottom: "1em", textWrap: "wrap" }}>
                        <h4>{kite.name}</h4>
                        <p>{kite.price} £</p>
                    </div>
                    {showButtons && (
                        <div className="buttonContainer buttons">
                            <button onClick={handleEdit}>
                                <i className="fa-regular fa-pen-to-square"></i>{" "}
                            </button>
                            <button disabled={isLoading} onClick={handleDelete}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    )}
                    {showAdd && (
                        <button onClick={() => addToCart(kite)} className="addButton description">
                            <i className="fa-solid fa-plus"></i>{" "}
                        </button>
                    )}
                    
                </div>
                <p className="description">{kite.description}</p>{" "}
                
            </div>
        </div>
    );

    return (
        <div key={kite.key} className="itemContainer">
            {/* <img src={kite.img} alt={kite.name} /> */}
            {isEditing ? editForm : itemInfo}
        </div>
    );
}
