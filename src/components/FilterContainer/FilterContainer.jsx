import React, { useState, useEffect } from "react";

export default function FilterContainer({ kites, setFilteredKites }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("price");
    const [sortDirection, setSortDirection] = useState("asc");

    useEffect(() => {
        let sortedKites = [...kites];
        if (sortBy === "price") {
            sortedKites.sort((a, b) => {
                if (sortDirection === "asc") {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });
        } else if (sortBy === "name") {
            sortedKites.sort((a, b) => {
                if (sortDirection === "asc") {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
        }

        sortedKites = sortedKites.filter((kite) =>
            kite.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredKites(sortedKites);
    }, [searchQuery, kites, sortBy, sortDirection, setFilteredKites]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortByName = () => {
        setSortBy("name");
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    };

    const handleSortByPrice = () => {
        setSortBy("price");
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
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
            <div className="sortButtonContainer">
                <button className="primaryButton" onClick={handleSortByName}>
                    {sortBy === "name" ? (
                        sortDirection === "asc" ? (
                            <i class="fa-solid fa-a"></i>
                        ) : (
                            <i class="fa-solid fa-z"></i>
                        )
                    ) : (
                        <i class="fa-solid fa-a"></i>
                    )}
                </button>
                <button className="primaryButton" onClick={handleSortByPrice}>
                    {sortBy === "price" ? (
                        sortDirection === "asc" ? (
                            <i className="fa-solid fa-down-long"></i>
                        ) : (
                            <i className="fa-solid fa-up-long"></i>
                        )
                    ) : (
                        <i className="fa-solid fa-down-long"></i>
                    )}
                </button>
            </div>
        </div>
    );
}
