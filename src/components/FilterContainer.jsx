import React, { useState, useEffect } from "react";

export default function FilterContainer({ kites, setFilteredKites }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("price"); // Add state for sorting method

    useEffect(() => {
        let sortedKites = [...kites];
        if (sortBy === "price") {
            sortedKites.sort((a, b) => a.price - b.price);
        } else if (sortBy === "name") {
            sortedKites.sort((a, b) => a.name.localeCompare(b.name));
        }

        sortedKites = sortedKites.filter((kite) =>
            kite.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredKites(sortedKites);
    }, [searchQuery, kites, sortBy, setFilteredKites]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSort = () => {
        setSortBy(sortBy === "price" ? "name" : "price");
    };

    return (
        <div className="filterContainer">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                type="text"
                placeholder="Type to search.."
                value={searchQuery}
                onChange={handleSearch}
            />
            <div>
                <button onClick={handleSort}>Sorted by {sortBy === "price" ? "price" : "name"}</button>
            </div>
        </div>
    );
}