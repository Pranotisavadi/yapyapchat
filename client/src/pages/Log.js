import { useContext, useRef } from "react";
import '../App.css';

import { AuthContext } from "../context/AuthContext";
import { loginCall } from "../apiCalls";

// import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value }, dispatch );
  };
console.log(user);
if (user) return window.location.replace("/homechat");

  return (
    <>
    <div className="login">
        <h1>YapYap</h1>
        <div className='loginContainer'>
          <span className="loginTitle">Login</span>
           <form className="loginForm" onSubmit={handleClick}>

            <label><b>Username</b></label>
            <input className="loginInput"
            type="text"
            autoComplete="username" 
            required
            placeholder="Enter your username..."
            ref={username}
            // onChange={(e) => setUsername(e.target.value)}
            // value={username}            
            /><br/>

            <label><b>Password</b></label>
            <input className="loginInput" 
            type="password" 
            autoComplete="password"
            required 
            placeholder="Enter your password..."
            minLength="6"
            ref={password}
            // onChange={(e) => setPassword(e.target.value)}
            // value={password} 
             />
           <button className="loginButton" type="submit"><b>Login</b></button>

          </form>
            <button className="loginRegisterButton"><a href="./register">Register</a></button>
            </div>
        </div>
        </>
  );
}