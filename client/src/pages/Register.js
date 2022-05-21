import React from 'react'

function Register() {
    return (
        <div className="register">
            <h1>YapYap</h1>
        <div className='registerContainer'>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label><b>Username</b></label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label><b>Email</b></label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label><b>Password</b></label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton"><a href="./Login">Login</a></button>
    </div>
    </div>

    )
}

export default Register