import React from 'react'
import './navbar.css'

const Title =()=>(   
    <img src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7" 
    alt="logo"
    className="logo-img" />
);
function Navbar() {
  return (
    
    <div className="header">
         <Title/>
         <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
         </div>


     </div> 
      
   
  )
}

export default Navbar
