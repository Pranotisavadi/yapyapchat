import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Login from './pages/Log'
import Register from './pages/Register'
import HomeChat from './pages/HomeChat';
// import VideoChat from './pages/VideoChat';
import Navbar from './components/navbar/Navbar';
// import { ContextProvider } from './SocketContext'
// import {  AuthProvider } from './context/AuthProvider';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
  const {user} = useContext(AuthContext);
  console.log(user)

  return (
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={ user ? <HomeChat /> : <Register/> } />
            <Route path="/login" element={user ? <HomeChat/> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homechat" element={user ? <HomeChat /> : <Register /> } />
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
