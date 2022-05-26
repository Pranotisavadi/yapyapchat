import React from 'react'
import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import '../App.css'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [bug, setBug] = useState(false)


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setBug(false);
        // console.log("Register button clicked")
    try{
       
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`,{
             username, email, password
         });
         res.data && window.location.replace("/login");
        }catch(err){
            setBug(true);
        }     

};
  

    return (
            <div className="register">
            <h1>YapYap</h1>
            <div className='registerContainer'>
            <span className="registerTitle">Register</span>
            <form onSubmit={handleSubmit} className="registerForm" >           
            {/* <label>First name</label>
            <input type="text"  placeholder="First name" />
            
            <label>Last name</label>
            <input type="text"  placeholder="Last name" /> */}

            <label>Username</label>
            <input className="registerInput" type="text" placeholder="Enter your username .." autoComplete="username" onChange={e => setUsername(e.target.value)}></input>
           
            <label>Email</label>
            <input className="registerInput" type="email" placeholder="Enter email" autoComplete="email" onChange={e => setEmail(e.target.value)} />
           
            <label>Password</label>
            <input className="registerInput" type="password"  placeholder="Enter password" autoComplete="new-password"  onChange={e => setPassword(e.target.value)}/>

           <button className='registerButton' type="submit">Register</button>
            </form>
            
            <p className="registerLoginButton">
                Already registered <a href="./Login">log in?</a>
            </p>
            
          
            {bug ? (<h3 style={{color:"red", marginTop:"10px"}}>Something went Wrong! Try Again.</h3>): null}
            </div>
            </div>                     
            
      
    )
}

export default Register;