import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeChat from './pages/HomeChat';
import VideoChat from './pages/VideoChat';
import Navbar from './components/navbar/Navbar';
import { ContextProvider } from './SocketContext'
import { AuthContextProvider } from './context/Context';


function App() {

  return (
    <AuthContextProvider>
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homechat" element={<HomeChat />} />
            <Route path="/videochat" element={
            <ContextProvider>
              <VideoChat />
            </ContextProvider>
            } />
        </Routes>
      </Router>
    </AuthContextProvider>
    
  );
}

export default App;
