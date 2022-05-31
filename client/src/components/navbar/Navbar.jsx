// import React, { useContext } from 'react'
import "./navbar.css";
import {Search, Person, Chat, Notifications} from "@mui/icons-material";
import ScrollDialog from '../ScrollDialog';

// import { AuthContext } from '../../context/AuthContext';



function Navbar() {

  // const {user} =useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;


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

        <div className="profile">

        {/* <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt="" className="topbarImg" /> */}
        <ScrollDialog />
       
        </div>


      </div>

      {/* <div className="topbarLinks">
          <span className="topbarLink">Login</span>
        </div> */}
       
    </div>
  )
}

export default Navbar;