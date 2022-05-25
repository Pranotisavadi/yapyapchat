import React from 'react';
import '../App.css';
import {useRef, useContext} from 'react';
import { loginCall } from '../apiCalls';
import { AuthContext } from '../context/Context';




function Login() {
  const username = useRef();
  const password = useRef();
  const{ dispatch } = useContext(AuthContext);


  const handleClick =(e) =>{
    e.preventDefault();
   loginCall({username: username.current.value, password :password.current.value}, dispatch);
  };

  // console.log(user)
    return (
        <div className="login">
            <h1>YapYap</h1>
            <div className='loginContainer'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleClick}>
        <label>Username</label>
        <input className="loginInput" autoComplete="username" type="text" required placeholder="Enter your username..." ref={username}/><br/>
        <label>Password</label>
        <input className="loginInput" 
        autoComplete="password"
        type="password" 
        required 
        placeholder="Enter your password..."
        minLength="6"
        ref={password}/>
       <button type="submit" className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton"><a href="./register">Register</a></button>
        </div>
    </div>
    )
}

export default Login;