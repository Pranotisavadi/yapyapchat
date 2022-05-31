import React from 'react'
import ChatOnline from '../chatOnline/ChatOnline';
import Conversation from '../conversations/Conversation';
import Message from '../message/Message';
import './leftbar.css';

function LeftBar() {
  return (
      <>
    <div className='messenger'>
        <div  className='chatMenu'>
        <div className="chatMenuWrapper">
        <input placeholder="Search for friends" className="chatMenuInput" />
        <Conversation />
        </div>

        </div>
        <div  className='chatBox'>
        <div className="chatBoxWrapper">
            <div className='chatBoxTop'>
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            </div>

            <div className='chatBoxBottom'>
            <textarea className='chatMessageInput' placeholder='Chat With YapYap . . .'></textarea>
            <button className='chatSubmitButton'>Send</button>
            </div>

        </div>

            
        </div>
        <div  className='chatOnline'>
        <div className="chatOnlineWrapper">
            <ChatOnline />
        </div>

            
        </div>
    </div>
    </>
  )
}

export default LeftBar