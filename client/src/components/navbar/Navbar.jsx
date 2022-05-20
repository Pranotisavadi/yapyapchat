import React from 'react'
import "./navbar.css";
import {Search, Person, Chat, Notifications} from "@mui/icons-material";



function Navbar() {


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">YapYap</span>
      </div>
      
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search YapYap..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge"></span>
          </div>
        </div>
        <img src="https://images.pexels.com/photos/10116751/pexels-photo-10116751.jpeg?cs=srgb&dl=pexels-photoalexandru-10116751.jpg&fm=jpg" alt="" className="topbarImg"/>
      </div>
      {/* <div className="topbarLinks">
          <span className="topbarLink">Login</span>
        </div> */}
    </div>
  )
}

export default Navbar;