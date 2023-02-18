import React, { useContext } from 'react'
import { Typography, Grid, Paper } from '@mui/material'

import { SocketContext } from '../SocketContext'



const VideoPlayer = () => {
  const {name, callAccepted, myVideo, userVideo,callEnded,stream,call} =useContext(SocketContext)
  return (
    <Grid container style={{justifyContent: 'center'}}>
    {/* my video */}
      {
        stream && (
          <Paper style={{ padding: '10px', border: '2px solid black', margin: '10px'}}>
            <Grid item xs={12} md={6}>
              <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted autoPlay ref={myVideo} style={{width: '550px'}} />
            </Grid>
          </Paper>
        )
      }

    {/* user video */}
      {
        callAccepted && !callEnded && (
          <Paper style={{ padding: '10px', border: '2px solid black', margin: '10px'}}>
            <Grid item xs={12} md={6}>
              <Typography variant='h5' gutterBottom>{call.name || 'UserName'}</Typography>
              <video playsInline autoPlay ref={userVideo} style={{width: '550px'}} />
            </Grid>
          </Paper>
        )
      }
    </Grid>
  )
}

export default VideoPlayer