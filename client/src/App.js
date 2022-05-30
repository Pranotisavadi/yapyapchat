import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './pages/Log'
import Register from './pages/Register'
import HomeChat from './pages/HomeChat';
import VideoChat from './pages/VideoChat';
import Navbar from './components/navbar/Navbar';
import { UserContext, UserProvider } from './context/UserContext';
import { SocketProvider } from './context/SocketContext';
import { useContext } from 'react'

function App() {
  const {user} = useContext(UserContext)

  return (
   <UserProvider>
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homechat/:id" element={user ? <Login /> : <HomeChat />} />
            <Route path="/homechat" element={ <HomeChat />
             } />
            <Route path="/homechat/:id" element={
            <SocketProvider>
              {user ? <VideoChat /> : <Login />}
            </SocketProvider>
            } />
        </Routes>
      </Router>
   </UserProvider>
   
    
  );
}

export default App;
