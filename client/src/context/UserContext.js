import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

const LOGIN_URL = '/auth/login';

// create context
const UserContext = createContext('UserContext');

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');},[username,password])

const handleClick = async (e) =>{
  e.preventDefault();

  try{
    const user = await axios.post(LOGIN_URL, { username, password }, {
      headers: {'Content-Type' : 'application/json'},
      withCredentials: true,
    },
    );
    // console.log("the response.data is: ", user?.data);
    setUser(user.data.data)
    console.log("the user is: ", user);
    console.log(user.data.username)
    // console.log("this is the username: ", user)

    if (user) return window.location.replace(`/homechat/${user.data._id}`);
  
  }catch (err){
    if(!err?.user){
      setErrMsg('No Server Response')
    }else if(err.user?.status === 400){
      setErrMsg('Missing username or Password')

    }else if(err.user?.status === 401){
      setErrMsg('Unauthorized');
    }else{
      setErrMsg('Login Failed');
    }
  }
}


return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={{ user, username, password, setUser, setUsername, setPassword, handleClick}}>
        {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };








// fetch a user from backend API
//   useEffect(() => {
//     const fetchUser = () => {
//       fetch('/:id')
//         .then((response) => response.json())
//         .then((result) => setUser(result.results[0]))
//         .catch((error) => console.log('An error occurred'));
//     };

//     fetchUser();
//   }, []);