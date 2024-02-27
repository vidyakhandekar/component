import React from 'react'
import './searchbar.css'
function Searchbar() {
  return (
    <div className="main">
        <div className="header">
            Search Bar
        </div>
        <div className="searchbar">
            <input type="text" className="bar"/>
            <button className="btn">Search</button>
        </div>
    </div>
  )
}

export default Searchbar
