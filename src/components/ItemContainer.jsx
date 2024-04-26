import React from "react";

export default function ItemContainer({ kite, showButtons }) {

    return (
        <div key={kite.key} className="itemContainer">
            <img src={kite.img} alt={kite.name} />
            <p>{kite.name}</p>
            <p>{kite.price}</p>
            {showButtons && (
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            )}
        </div>
    );
}
