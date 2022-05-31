import React from 'react';
import '../components/videoChat/videoContainer.css';
import VideoContainers from '../components/videoChat/VideoContainers';
import VideoActions from '../components/videoChat/VideoActions';
import Calls from '../components/videoChat/Calls';

function VideoChat() {

  return (
    <div className="video-chat-wrapper">
      <VideoContainers />
      <VideoActions>
        <Calls/>
      </VideoActions>
    </div>

  )
}

export default VideoChat;
