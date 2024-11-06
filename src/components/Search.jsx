import React, { useState } from 'react';
import search_icon from "../Assets/image/search.png";


const Search = ({ setSearchValue }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = () => {
        setSearchValue(searchInput)
    }

    return (
        <div className='search-wrapper'>
            <input type="text" placeholder='search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <img src={search_icon} alt="search_icon" onClick={handleSearch} />
        </div>
    )
}

export default Search