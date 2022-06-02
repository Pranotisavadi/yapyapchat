import { useContext, useEffect, useState, useRef } from 'react';
import axios from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';
// import ChatOnline from '../chatOnline/ChatOnline';
import Conversation from '../conversations/Conversation';
import Message from '../message/Message';
import './leftbar.css';
import { io } from "socket.io-client";

function LeftBar() {
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  const { user } = useContext(AuthContext);
  const socket = useRef()
  

  useEffect(()=>{
    socket.current = io("ws://localhost:8800")
    socket.current.on("getMessage", (data)=>{
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  },[]);

  useEffect(()=>{
    arrivalMessage && 
    currentChat.member.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat]);

  useEffect(()=>{
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    })
  },[user]);

  useEffect(() => {
    socket.current = io("ws://localhost:8800")
    socket.current.on("getMesage", data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", users => {
      console.log(users);
    })
  }, [user]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id)
        // console.log(res)
        setConversations(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchConversations();
  }, [user._id])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id)
        console.log(currentChat._id);
        setMessages(res.data);       
        console.log(res);
      } catch (err) {
        console.log(err)
      }
    }
    fetchMessages();
  }, [currentChat]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id
    };

    const receiverId = currentChat.member.find((member) => member !== user._id)

    console.log(user._id)

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    })
    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err)
    }
  }

  
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      <div className='messenger'>
        <div className='chatMenu'>
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation key={c._id} conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className='chatBox'>
          <div className="chatBoxWrapper">
            {
              currentChat ?
                (
                  <>
                    <div className='chatBoxTop'>
                      {messages.map(m => (
                        <div ref={scrollRef}>
                          <Message message={m} own={m.sender === user._id} />
                        </div>
                      ))}
                    </div>
                    <div className='chatBoxBottom'>
                      <textarea
                        className='chatMessageInput'
                        placeholder='Chat With YapYap . . .'
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                      ></textarea>
                      <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                    </div> </>
                ) : (<span className="noConversationText">Open a conversation to start chat</span>)}
          </div>
        </div>
        <div className='chatOnline'>
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  )
}
export default LeftBar