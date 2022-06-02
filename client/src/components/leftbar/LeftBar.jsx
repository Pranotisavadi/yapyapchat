import { useContext, useEffect, useState } from 'react';
import axios from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';
// import ChatOnline from '../chatOnline/ChatOnline';
import Conversation from '../conversations/Conversation';
import Message from '../message/Message';
import './leftbar.css';

function LeftBar() {  


  const[conversations , setConversations] = useState([])
  const[currentChat , setCurrentChat] = useState(null)
  const[messages, setMessages] =useState([])
  const[newMessage, setNewMessage] =useState("");
  const {user} =useContext(AuthContext);
  console.log(user)
  useEffect(() =>{
    const fetchConversations = async () => {
      try{
        const res = await axios.get("/conversations/"+ user._id)
        // console.log(res)
        setConversations(res.data);
        console.log(conversations);
      }catch(err){
        console.log(err)
      }   
  } 
   fetchConversations();    
  },[user._id, conversations])

   useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/messages/62854e2089bd244e9213f026")
        setMessages(res.data);
        console.log(res.data);
      }catch(err){
        console.log(err)
      }
    }
 fetchMessages();
  }, [currentChat])
  
  console.log(messages)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const message = {
      sender: "62854e2089bd244e9213f026",
      text: newMessage,
      conversationId: currentChat._id
    };

    try{
      const res = await axios.post("/messages", message);
      console.log(res);
    }catch(err){
      console.log(err)
    }
  }
  

  return (
      <>
    <div className='messenger'>
        <div  className='chatMenu'>
        <div className="chatMenuWrapper">

        <input  type="text" 
        placeholder="Search for friends" 
        className="chatMenuInput"
         />
         

        {conversations.map((c) =>(
          <div onClick = {() => setCurrentChat(c)}>
          <Conversation key={c._id} conversation={c} currentUser = { user }/>
          </div>
        ))}
        </div>
        </div>
        <div  className='chatBox'>
        <div className="chatBoxWrapper">
          {
            currentChat ?
            (
        <>
            <div className='chatBoxTop'>
              {messages.map(m=>(
                <Message message={m} own={m.sender === "6282eb8183566b3cd179c271"}/>
              ))}
            </div>
            <div className='chatBoxBottom'>
            <textarea 
            className='chatMessageInput' 
            placeholder='Chat With YapYap . . .'
            onChange={(e)=>setNewMessage(e.target.value)}
            value={newMessage}
            ></textarea>
            <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
            </div> </>
            ) :( <span className="noConversationText">Open a conversation to start chat</span> )}
        </div>
        </div>
        
        </div>
        <div  className='chatOnline'>
        <div className="chatOnlineWrapper">
            {/* <ChatOnline /> */}
        </div>
        </div>
   
    </>
  )
}
export default LeftBar