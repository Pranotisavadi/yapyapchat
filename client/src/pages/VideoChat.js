import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { SocketContext } from '../context/SocketContext';
import '../components/videoChat/videoNav.css';
import { VideoCameraFrontOutlined, MicOutlined, IosShareOutlined, CallEndRounded } from "@mui/icons-material";

function VideoChat() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className="video-nav-container">
      <Grid container className="grid-container">
        {stream && (
          <Paper className="paper">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted ref={myVideo} autoPlay className="video" />
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper className="paper">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay className="video" />
            </Grid>
          </Paper>
        )}
      </Grid>
      <div className="right-side-panel">
        <div className="topSide">
          <div className="time-lapse">

          </div>
        </div>

        <div className="bottomSide">
          <div className="right-icons-container">
            <div className="video-nav-item">
              <VideoCameraFrontOutlined />
            </div>
            <br/>
            <div className="video-nav-item">
              <MicOutlined />
            </div>
            <br/>
            <div className="video-nav-item">
              <IosShareOutlined />
            </div>
            <br/>
            {/* <button className="end-call-btn" type="button btn-danger">
              <CallEndRounded />
            </button> */}

            <div className="video-nav-item">
            <CallEndRounded />
            </div>
            
          </div>
        </div>

      </div>
    </div>

  )
}

export default VideoChat;
