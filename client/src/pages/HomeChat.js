import '../App.css';
import { createContext, useState, useEffect, useContext } from "react";
import ReactSwitch from "react-switch";
import axios from '../api/axios'
import '../components/leftbar/leftbar.css';
import Message from '../components/message/Message';
import Conversation from '../components/conversations/Conversation';
import ChatOnline from '../components/chatOnline/ChatOnline';
import { UserContext } from '../context/UserContext';

export const ThemeContext = createContext(null);

function HomeChat() {
    const {user} = useContext(UserContext)
    const [theme, setTheme] = useState("dark");
    const [conversations, setConversations] = useState([])
    // const [currentUser, setCurrentUser] = useState(null)

    console.log(user)

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    // useEffect(() => {
    //     const fetchConversations = async () => {
    //         try {
    //             const res = await axios.get(`/conversations/${currentUser}`)
    //             setConversation(res?.data);
    //             setCurrentUser(conversation.data.user_id)
    //         } catch (err) {
    //             console.log("ERROR", err)
    //         }
    //     }
    //     fetchConversations();
    // }, [conversation, currentUser])

    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get("/conversations/" + user._id);
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
      }, [user._id]);

    return (
        <ThemeContext.Provider>
            <div id={theme}>
                <div className='switch'>
                    <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                </div>
                <div className='leftSide'>
                    <div className='messenger'>
                        <div className='chatMenu'>
                            <div className="chatMenuWrapper">
                                <input placeholder="Search for friends" className="chatMenuInput" />
                                {conversations.map((conversation, index) => (
                                    <Conversation conversation={conversation} key={index} currentUser={user} />
                                ))}

                            </div>

                        </div>
                        <div className='chatBox'>
                            <div className="chatBoxWrapper">
                                <div className='chatBoxTop'>
                                    <Message />
                                    <Message own={true} />
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
                        <div className='chatOnline'>
                            <div className="chatOnlineWrapper">
                                <ChatOnline />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

export default HomeChat;