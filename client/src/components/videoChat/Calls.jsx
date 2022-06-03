import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { SocketContext } from '../../SocketContext'; 

const Calls = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    console.log("call info: ", call)
    return (
      <>
        {call.isReceivingCall && !callAccepted && (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-around', 
              cursor: 'pointer', 
              height: '100px', 
              paddingTop: '10px', 
              paddingBottom: '10px'
              }}>
                <h1>{call.name} is calling: </h1>
                <Button variant="contained" color="primary" onClick={answerCall}>
                    Answer
                </Button>
            </div>
        )}
      </>
    )
}

export default Calls;
