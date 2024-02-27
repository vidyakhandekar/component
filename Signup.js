import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div class="main container-fluid d-flex">
    <div class="img d-flex">
        <img src="./signup.jpg" alt="" class="login-img"/>
    </div>
    <div class="card d-flex">
        <div class="card-header">
            Sign Up
        </div>
        <div class="card-body">
            <form action="/creatAccount" method="post">
                <input type="text" placeholder="Enter Full Name" name="name" class="signin-ip d-flex" />
                <input type="email" name="email" placeholder="Enter Email" class="signin-ip d-flex"/ >
                <input type="text" name="username" placeholder="Enter Username" class="signin-ip d-flex"/>
                <input type="password" name="password" placeholder="Enter Password" class="signin-ip d-flex"/>
                <button type="submit" class="btn">Sign Up</button>
            </form>
        </div>
        <div class="card-footer">
            <p>
                Already user ? <span><a href="/login">Sign In</a></span>
            </p>
        </div>
    </div>
</div>
  )
}

export default Signup
