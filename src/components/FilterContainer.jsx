import React from "react";

export default function FilterContainer() {
    return (
        <div className="filterContainer">
            <i className="fa-solid fa-magnifying-glass"></i>

            <input type="text" placeholder="Type to search.." />
            <div>
                <p>sort by: popular</p>
            </div>
        </div>
    );
}
