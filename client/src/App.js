import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './pages/Log'
import Register from './pages/Register'
import HomeChat from './pages/HomeChat';
// import VideoChat from './pages/VideoChat';
import Navbar from './components/navbar/Navbar';
// import { ContextProvider } from './SocketContext'
import {  AuthProvider } from './context/AuthProvider';
// import { useContext } from 'react';


function App() {
  // const {auth} =useContext(AuthContext)

  return (
   
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homechat" element={
             <AuthProvider>
               <HomeChat />
              </AuthProvider>
             } />
            {/* <Route path="/videochat" element={
            <ContextProvider>
              <VideoChat />
            </ContextProvider>
            } /> */}
        </Routes>
      </Router>
   
    
  );
}

export default App;
