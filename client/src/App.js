import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeChat from './pages/HomeChat';
import VideoChat from './pages/VideoChat';
import LeftBar from './components/leftbar/LeftBar';
import Navbar from './components/navbar/Navbar';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

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
  
    <ThemeContext.Provider>
    <div id={theme}>
    <Navbar />
    <div className='switch'>
    <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </div>
    <div className='leftSide'>
      <LeftBar />
      </div> 
    </div>
     </ThemeContext.Provider>
  );
}

export default App;
