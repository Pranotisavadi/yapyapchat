// import React, { useContext } from 'react';
import '../App.css';
import {useRef, useEffect, useState } from 'react';
// import { Link } from 'react'
// import { AuthContext } from '../context/AuthProvider';
import axios from '../api/axios';

const LOGIN_URL = '/auth/login';

const Login = () => {
  // const {auth} = useContext(AuthContext)
  // console.log("This is auth from context"+ auth)


  const user = useRef();
  // const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   username.current.focus();
  // },[])

  useEffect(() => {
      setErrMsg('');},[username,password])

  const handleClick = async (e) =>{
    e.preventDefault();

    try{
      const response = await axios.post(LOGIN_URL, { username, password }, {
        headers: {'Content-Type' : 'application/json'},
        withCredentials: true,
      }
      );
      console.log(response?.data);
      console.log(response);
    

      // setAuth({username, password});
     

      setUsername("");
      setPassword("");
      // setSuccess(true);
      if (response.data) return window.location.replace("/homechat");
    
    }catch (err){
      if(!err?.response){
        setErrMsg('No Server Response')
      }else if(err.response?.status === 400){
        setErrMsg('Missing username or Password')

      }else if(err.response?.status === 401){
        setErrMsg('Unauthorized');
      }else{
        setErrMsg('Login Failed');
      }
      // errRef.current.focus();

      }

    }
  
  return(
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
            ref={user}
            onChange={(e) => setUsername(e.target.value)}
            value={username}            
            /><br/>

            <label><b>Password</b></label>
            <input className="loginInput" 
            type="password" 
            autoComplete="password"
            required 
            placeholder="Enter your password..."
            minLength="6"
            // ref={password}
            onChange={(e) => setPassword(e.target.value)}
            value={password}  />
           <button className="loginButton"><b>Login</b></button>

          </form>
            <button className="loginRegisterButton"><a href="./register">Register</a></button>
            </div>
        </div>
        </>

      

  )

}

 export default Login;