import { useEffect, useState, useRef } from 'react';
import axios from '../../api/axios';
// import { AuthContext } from '../../context/AuthProvider';
import ChatOnline from '../chatOnline/ChatOnline';
import Conversation from '../conversations/Conversation';
import Message from '../message/Message';
import './leftbar.css';

function LeftBar() {
  const[conversations , setConversations] = useState([])
  const[currentChat , setCurrentChat] = useState(null)
  const[messages, setMessages] =useState([])
  const[newMessage, setNewMessage] =useState("");
  const scrollRef = useRef();
  // const {auth} = useContext(AuthContext)
  // console.log(auth)
  useEffect(() =>{
    const fetchConversations = async () => {
      try{
        const res = await axios.get("/conversations/6282eb8183566b3cd179c271")
        setConversations(res.data);
        console.log(res.data);
      }catch(err){
        console.log(err)
      }
  }
   fetchConversations();
  },[])

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
      setMessages([...messages, res.data]);
      setNewMessage("");
    }catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])

  return (
      <>
    <div className='messenger'>
        <div  className='chatMenu'>
        <div className="chatMenuWrapper">
        <input placeholder="Search for friends" className="chatMenuInput" />
        {conversations.map((c) =>(
          <div onClick = {() => setCurrentChat(c)}>
          <Conversation conversation={c} currentUser ="6282eb8183566b3cd179c271"/>
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
                <div ref= {scrollRef}>
                  <Message message={m} own={m.sender === "6282eb8183566b3cd179c271"}/>
                </div>
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