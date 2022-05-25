import React from 'react';
import '../App.css';
import {useRef, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from '../api/axios';
const LOGIN_URL = '/auth/login';

const Login = () => {
  const {setAuth} = useContext(AuthContext)


  const username = useRef();
  // const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   username.current.focus();
  // },[])

  useEffect(() => {
      setErrMsg('');},[user,pwd])

  const handleClick = async (e) =>{
    e.preventDefault();

    try{
      const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}), {
        headers: {'Content-Type' : 'application/json'},
        withCredentials: true,
      }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));

      setAuth({user, pwd});
     

      setUser("");
      setPwd("");
      setSuccess(true);

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
      { success ? (
           <section>
               <h1>You are logged in!</h1>
               <br />
               <p>
                   <a href="#"> Go to Home</a>
               </p>
           </section>

      ):(
     
    <div className="login">
        <h1>YapYap</h1>
        <div className='loginContainer'>
          <span className="loginTitle">Login</span>
           <form className="loginForm" onSubmit={handleClick}>

            <label><b>Username</b></label>
            <input className="loginInput"
            type="text" 
            required
            placeholder="Enter your username..."
            ref={username}
            onChange={(e) => setUser(e.target.value)}
            value={user}            
            /><br/>

            <label><b>Password</b></label>
            <input className="loginInput" 
            type="password" 
            required 
            placeholder="Enter your password..."
            minLength="6"
            // ref={password}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}  />
           <button type="submit" className="loginButton"><b>Login</b></button>

          </form>
            <button className="loginRegisterButton"><a href="./register">Register</a></button>
            </div>
        </div>
        )}
        </>

      

  )

}

 export default Login;