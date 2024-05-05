import { useStore } from "../../data/store.js";
import { addKite, getKites } from "../../data/crud.js";
import React, { useState } from "react";
import "./add-item-form.css";
import standardImg from "/background-white-kite.png";

export default function EditForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState(standardImg);
    const [invalidFields, setInvalidFields] = useState([]);
    const setKites = useStore((state) => state.setKites);

    // Add function
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if required fields are filled
        if (!name || !price) {
            setInvalidFields(["name", "price"]);
            return;
        } else {
            setInvalidFields([]);
        }

        setIsLoading(true);

        const newKite = {
            name: name,
            price: price,
            img: img,
            description: description,
        };

        try {
            await addKite(newKite);
            setName("");
            setPrice("");
            setImg("");
            setDescription("");

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
                <div className={`inputColumn ${invalidFields.includes("name") ? "invalid" : ""}`}>
                    <label>Name of the product</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="inputColumn">
                    <label>Description</label>
                    <input
                        type="text"
                        maxLength="100"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={`inputColumn ${invalidFields.includes("price") ? "invalid" : ""}`}>
                    <label>Price of the product</label>
                    <input
                        type="text"
                        pattern="[0-9]*"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
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
                        required
                    />
                    <p>Test img: src\assets\kites\test-img.png</p>
                </div>
                <button className="primaryButton" disabled={isLoading} type="submit">
                    {isLoading ? "Loading..." : "Add item to list"}
                </button>
            </div>
            <div className="formDivider"></div>
            <div id="itemPreview">
                <div className="itemContainer">
                    {img ? (
                        <img src={img} alt={name} />
                    ) : (
                        <img src={standardImg} alt="Test Image" />
                    )}
                    {name ? <p>{name}</p> : <p>Title</p>}
                    {description ? <p>{description}</p> : <p>Description</p>}
                    {price ? <p>{price} £ </p> : <p>Price</p>}
                </div>
            </div>
        </form>
    );
}