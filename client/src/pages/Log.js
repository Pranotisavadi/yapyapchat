import React, { useContext } from 'react';
import '../App.css';
// import { useEffect, useState } from 'react';
// import axios from '../api/axios';
import { UserContext } from '../context/UserContext';

// const LOGIN_URL = '/auth/login';

const Login = () => {
  const {username, password, setUsername, setPassword, handleClick} = useContext(UserContext)
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [errMsg, setErrMsg] = useState('');

  // useEffect(() => {
  //   username.current.focus();
  // },[])

  // useEffect(() => {
  //     setErrMsg('');},[username,password])

  // const handleClick = async (e) =>{
  //   e.preventDefault();

  //   try{
  //     const response = await axios.post(LOGIN_URL, { username, password }, {
  //       headers: {'Content-Type' : 'application/json'},
  //       withCredentials: true,
  //     }
  //     );
  //     console.log("the response.data is: ", response?.data);
  //     console.log("the response is: ", response);
  //     setUser(response?.data);
  //     console.log("this is the user: ", user)

  //     setUsername("");
  //     setPassword("");

  //     if (user) return window.location.replace(`/auth/homechat/${user._id}`);
    
  //   }catch (err){
  //     if(!err?.user){
  //       setErrMsg('No Server Response')
  //     }else if(err.user?.status === 400){
  //       setErrMsg('Missing username or Password')

  //     }else if(err.user?.status === 401){
  //       setErrMsg('Unauthorized');
  //     }else{
  //       setErrMsg('Login Failed');
  //     }
  //   }
  // }
  
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
            // ref={user}
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