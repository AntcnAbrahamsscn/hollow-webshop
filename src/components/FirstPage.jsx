import React, { useState } from "react";
import { getKites } from "../data/crud";
// CSS
import "../stylesheets/FirstPage.css";

// Imgs
import FirstPageBg from "../assets/backgrounds/hollow-kite.png";

export default function FirstPage() {
    const [kites, setKites] = useState([]);

    const handleClick = async () => {
        const kitesData = await getKites();
        setKites(kitesData);
        console.log("Data from FS: " + kitesData);
    };

    return (
        <div
            className="first-page"
            style={{
                backgroundImage: `url(${FirstPageBg})`,
                backgroundSize: "cover",
                backgroundPosition: "-400px", 
              }}
        >
            <h1>FirstPage</h1>
            <button onClick={handleClick}>Funkar det??</button>
            <ul>
                {kites.map((kite) => (
                    <li key={kite.key}>
                        <p>Name: {kite.name}</p>
                        <p>Price: {kite.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
