import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
// import { UserContext } from '../../context/userContext';
import "./conversation.css";

export default function Conversation({conversation, currentUser}) {
  const[user , setUser] = useState ({})
  useEffect(() => {

    const friendId = conversation.member.find((m) => m !== currentUser._id)
    console.log(" " + friendId)
    const fetchUser = async () => { 
      try{
    const res = await axios.get("/users/"+ friendId);
    setFriendUser(res.data)
    console.log(friendUser)
    // console.log(res)
  } catch(err){
    console.log(err)
  }
   
  }
  fetchUser();    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentUser, conversation])
  return (
    <div className="conversation"> 
    <img className='conversationImg' src="https://images.pexels.com/photos/10116751/pexels-photo-10116751.jpeg?cs=srgb&dl=pexels-photoalexandru-10116751.jpg&fm=jpg" alt=""/>
    <span className='conversationName'>{user?.username}</span>
    </div>
  )
}
