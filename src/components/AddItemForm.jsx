import { useStore } from "../data/store.js";
import { addKite, getKites } from "../data/crud.js";
import React, { useState } from "react";
import "../stylesheets/add-item-form.css";
import standardImg from "../assets/backgrounds/background-white-kite.png";

export default function EditForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState(standardImg);
    const setKites = useStore((state) => state.setKites);

    // Add function
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !price) {
            return;
        }

        setIsLoading(true);

        const newKite = { name: name, price: price, img: img };

        try {
            await addKite(newKite);
            setName("");
            setPrice("");
            setImg("");

            setKites(await getKites());
        } catch (error) {
            console.error("Error adding kite:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="addItemFormContainer">
            <div className="inputContainer">
                <h3>Add new item</h3>
                <div className="inputColumn">
                    <label>Name of the product</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="inputColumn">
                    <label>Price of the product</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="inputColumn">
                    <label>
                        Add image, copy relative path to folder or url
                    </label>
                    <input
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                    <p>Test img: src\assets\kites\test-img.png</p>
                </div>
                <button disabled={isLoading} type="submit">
                    {isLoading ? "Loading..." : "Add"}
                </button>
            </div>
            <div id="itemPreview">
                <h3>Your item</h3>
                <div className="itemContainer">
                    {img ? (
                        <img src={img} alt={name} />
                    ) : (
                        <img src={standardImg} alt="Test Image" />
                    )}
                    {name ? <p>{name}</p> : <p>Title</p>}
                    {price ? <p>{price}</p> : <p>Price</p>}
                </div>
            </div>
        </form>
    );
}
