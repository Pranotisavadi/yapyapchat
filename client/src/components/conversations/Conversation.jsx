import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import "./conversation.css";

export default function Groups() {
  const {user} =useContext(AuthContext);
  return (
    <div className="conversation"> 
    <img className='conversationImg' src="https://images.pexels.com/photos/10116751/pexels-photo-10116751.jpeg?cs=srgb&dl=pexels-photoalexandru-10116751.jpg&fm=jpg" alt=""/>
    <span className='conversationName'>{user.username}</span>
    </div>
  )
}
