import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeChat from './pages/HomeChat';
import VideoChat from './pages/VideoChat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomeChat />} />
          <Route path="/video" element={<VideoChat />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
