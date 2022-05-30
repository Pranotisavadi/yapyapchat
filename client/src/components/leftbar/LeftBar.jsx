// import { useEffect, useState } from 'react';
// import axios from '../../api/axios';
// // import { AuthContext } from '../../context/AuthProvider';
// import ChatOnline from '../chatOnline/ChatOnline';
// import Conversation from '../conversations/Conversation';
// import Message from '../message/Message';
// import './leftbar.css';

// function LeftBar() {  
//   const[conversations , setConversations] =useState([])
//   // const {auth} = useContext(AuthContext)
//   // console.log(auth)
//   useEffect(() =>{
//     const fetchConversations = async () => {  
//       try{
//         const res = await axios.get("/conversations/6282eb8183566b3cd179c271")
//         setConversations(res.data);
//       }catch(err){
//         console.log(err)
//       }   
//   } 
//    fetchConversations();    
//   },[])
//   return (
//       <>
//     <div className='messenger'>
//         <div  className='chatMenu'>
//         <div className="chatMenuWrapper">
//         <input placeholder="Search for friends" className="chatMenuInput" />
//         {conversations.map((c) =>(
//           <Conversation conversation={c} currentUser ="6282eb8183566b3cd179c271"/>
//         ))}
       
//         </div>

//         </div>
//         <div  className='chatBox'>
//         <div className="chatBoxWrapper">
//             <div className='chatBoxTop'>
//             <Message />
//             <Message own={true}/>
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             <Message />
//             </div>

//             <div className='chatBoxBottom'>
//             <textarea className='chatMessageInput' placeholder='Chat With YapYap . . .'></textarea>
//             <button className='chatSubmitButton'>Send</button>
//             </div>

//         </div>

            
//         </div>
//         <div  className='chatOnline'>
//         <div className="chatOnlineWrapper">
//             <ChatOnline />
//         </div>

            
//         </div>
//     </div>
//     </>
//   )
// }

// export default LeftBar