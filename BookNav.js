import React from 'react'
import './BookNav.css'
function BookNav() {
  return (
    <div class="navbar">
            <div className="logo">
                <h1>BOOKSTORE</h1>
            </div>
           
            <div className='nav'>
                <ul className="item-li">
                    <li><a href="#">Non Fictional</a></li>
                    <li><a href="#">Fictional</a></li>
                    <li><a href="#">Story</a></li>
                    <li><a href="#">Phylosophy </a></li>
                </ul>
           </div>
        </div>
  )
}

export default BookNav
