import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './pages/Log'
import Register from './pages/Register'
import HomeChat from './pages/HomeChat';
import VideoChat from './pages/VideoChat';
import Navbar from './components/navbar/Navbar';
import { AuthProvider } from './context/AuthProvider';



function App() {

  return (
    <AuthProvider>
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/homechat" element={<HomeChat />} />
            <Route path="/videochat" element={<VideoChat />} />

        </Routes>
      </Router>
       </AuthProvider>
    
  );
}

export default App;
