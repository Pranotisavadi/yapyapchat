import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

//SETTING UP CONNECTION TO BACKEND SERVER
const SocketContext = createContext('SocketContext');

const ContextProvider = ({ children }) => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [me, setMe] = useState('');
    
    const connectionRef = useRef();
    const userVideo = useRef();
    const myVideo = useRef();
    console.log("my video: ", myVideo)
    
    
    const socket = useRef()
    
    useEffect(() => {
        socket.current = io(`${process.env.REACT_APP_VIDEOSERVER_URL}`)
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
            console.log(currentStream)
            setStream(currentStream);
            
            myVideo.current.srcObject = currentStream;
            console.log("my video2: ", myVideo.current.srcObject)
        })
        .catch(function (err) {
            console.log(err)
        })
        console.log("my video3: ", myVideo)
        socket.current.on('me', (id) => setMe(id));

        socket.current.on('callUser', ({ from, name, signal }) => {
            setName(name)
            setCall({ isReceivingCall: true, from, name: name, signal });
            console.log("setCall: ", call)
        });
    }, []);

    //Logic for ANSWERING a call
    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.current.emit('answerCall', { signal: data, to: call.from });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
            console.log("this is the userVideo: ", userVideo)
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    }

    //Logic for MAKING a call
    const callUser = (id) => {
        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.current.emit('callUser', { userId: id, signalData: data, from: me, name });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.current.on('callAccepted', (signal) => {
            setCallAccepted(true);

            peer.signal(signal);
        });

        connectionRef.current = peer;
    };

    //Logic for LEAVING a call
    const leaveCall = () => {
        setCallEnded(true);
        
        connectionRef.current.destroy();

        window.location.reload();
    };

    return (
        <SocketContext.Provider value={{
            call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, me, callUser, leaveCall, answerCall,
        }}>
            {children}
        </SocketContext.Provider>
    );
};

export { ContextProvider, SocketContext };