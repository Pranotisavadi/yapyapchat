import { Link } from 'react-router-dom'
import "./navbar.css";
import {Search, Person, Chat, Notifications, VideoCameraFront} from "@mui/icons-material";
import ScrollDialog from '../ScrollDialog';

// import { AuthContext } from '../../context/AuthContext';



function Navbar() {

  // const {user} =useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo"><Link to="/homechat" style={{ textDecoration: 'none', color: 'white' }}>YapYap</Link></span>
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
            <Link to="/videochat" style={{ textDecoration: 'none', color: 'white' }}>
              <VideoCameraFront />
            </Link>
          </div>
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge"></span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge"></span>
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