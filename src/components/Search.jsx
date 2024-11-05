import React from 'react';
import search_icon from "../Assets/image/search.png";


const Search = () => {
  return (
    <div className='search-wrapper'>
        <input type="text" placeholder='search' />
        <img src={search_icon} alt="search_icon" />
    </div>
  )
}

export default Search