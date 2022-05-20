import '../App.css';
import LeftBar from '../components/leftbar/LeftBar';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function HomeChat() {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));  
    }

    return (
            <ThemeContext.Provider>
                <div id={theme}>
                    <div className='switch'>
                        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>
                    <div className='leftSide'>
                        <LeftBar />
                    </div>
                </div>
            </ThemeContext.Provider>
        )
}

export default HomeChat;