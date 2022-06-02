import React, { useContext, useState } from 'react'
import { Button, TextField, Container, Grid, Typography, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';
import { SocketContext } from '../../SocketContext'; 

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   gridContainer: {
//     width: '100%',
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column',
//     },
//   },
//   container: {
//     width: '600px',
//     margin: '35px 0',
//     padding: 0,
//     [theme.breakpoints.down('xs')]: {
//       width: '80%',
//     },
//   },
//   margin: {
//     marginTop: 20
//   },
//   padding: {
//     padding: 20
//   },
//   paper: {
//     padding: '10px 20px',
//     border: '2px solid black'
//   },
// }));

const VideoActions = ({ children }) => {
  const { me, callAccepted, name, setName, leaveCall, callEnded, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('')

  return (
    <Container className="actions-container">
      <Paper elevation={10} className="paper">
        <form className="form-root" noValidate autoComplete='off'>
          <Grid container className="grid-container">
            <Grid item xs={12} md={6} className="grid-child">
              <Typography gutterBottom variant='h6'>Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              {console.log("this is me", me)}
              <CopyToClipboard text={me} className="copy-clipboard">
                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className="grid-child">
              <Typography gutterBottom variant='h6'>Make A Call</Typography>
              <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant='contained' color='secondary' fullWidth startIcon={<PhoneDisabled fontSize='large' />} onClick={leaveCall} className='button-end'>
                  Hang Up
                </Button >
              ) : (
                <Button variant='contained' color='primary' fullWidth startIcon={<Phone fontSize='large' />} onClick={() => callUser(idToCall)} className='button-end'>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      {children}
      </Paper>
    </Container>
  )
}

export default VideoActions