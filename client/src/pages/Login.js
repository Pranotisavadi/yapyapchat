import React from 'react';
import '../App.css';


function Login() {
    return (
        <div className="login">
            <h1>YapYap</h1>
            <div className='loginContainer'>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label><b>Email</b></label>
        <input className="loginInput" type="text" placeholder="Enter your email..." /><br/>
        <label><b>Password</b></label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton"><b>Login</b></button>
      </form>
        <button className="loginRegisterButton"><b>Register</b></button>
        </div>
    </div>
    )
}

export default Login