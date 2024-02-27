import React from 'react'
import './nav1.css'
function NavOne() {
  return (
    <div className='header'>
      <h1>EDUTECH</h1>
      <div >
        <ul className="item-li">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <a href="#"><button>Log In</button></a>
    </div>
  )
}

export default NavOne;
