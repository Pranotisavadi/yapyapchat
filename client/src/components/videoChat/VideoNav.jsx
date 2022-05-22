import React from 'react';
import './videoNav.css';
import { Person, Chat, VideoCameraFrontOutlined, MicOutlined, IosShareOutlined, CallEndRounded } from "@mui/icons-material";

function VideoNav() {
  return (
    <div className="video-nav-container">

      <div className="leftSide">
      <div className="time-lapse">

      </div>
        <div className="left-icons-container">
          <div className="video-nav-item">
            <Person />
          </div>
          <div className="video-nav-item">
            <Chat />
          </div>
        </div>
      </div>

      <div className="rightSide">
        <div className="right-icons-container">
          <div className="video-nav-item">
            <VideoCameraFrontOutlined />
          </div>
          <div className="video-nav-item">
            <MicOutlined />
          </div>
          <div className="video-nav-item">
            <IosShareOutlined />
          </div>
          <button className="end-call-btn" type="button btn-danger">
            <CallEndRounded />
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoNav