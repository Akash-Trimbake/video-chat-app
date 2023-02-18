import React, { useContext,useState } from 'react'
import { Typography, Button, TextField, Paper, Container, Grid } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Assignment,Phone,PhoneDisabled } from '@mui/icons-material'

import { SocketContext } from '../SocketContext'


const Options = ( {children} ) => {
  const {me,callAccepted,name,setName,callEnded,leaveCall,callUser} = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')
  return (
    <Container style={{width: '600px', margin: '35px 0', padding: 0}}>
      <Paper elevation={10} style={{padding: '10px 20px', border: '2px solid black'}}>
        <form noValidate autoComplete='off' style={{display: 'flex', flexDirection: 'column'}}>
          <Grid container style={{width: '100%'}}>
            <Grid item xs={12} md={6} style={{padding: 20}}>
              <Typography variant='h6' gutterBottom >Account Info</Typography>
              <TextField label='Name' value={name} variant="standard" onChange={(e) => setName(e.target.value)} fullWidth />
              
              <CopyToClipboard text={me} style={{marginTop: 20}}>
                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large' />} >
                  Copy Your Id
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={6} style={{padding: 20}}>
              <Typography variant='h6' gutterBottom >Make A Call</Typography>
              <TextField label='Id to Call' value={idToCall} variant="standard" onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                  <Button 
                  variant='contained' 
                  color='secondary' 
                  fullWidth 
                  startIcon={<PhoneDisabled fontSize='large' />}
                  onClick={leaveCall} 
                  style={{marginTop: 20}}
                  >
                    Hang Up
                  </Button>
                ) : (
                  <Button
                  variant='contained' 
                  color='primary' 
                  fullWidth 
                  startIcon={<Phone fontSize='large' />}
                  onClick={() => callUser(idToCall)}
                  style={{marginTop: 20}}
                  >
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

export default Options