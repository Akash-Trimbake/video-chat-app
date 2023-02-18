import React from 'react'
import { Typography, AppBar } from '@mui/material'

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'


const App = () => {
  return (
    <div style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',}}>
      <AppBar position='static' color='inherit' style={{ borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
        }}>
        <Typography variant='h2' align='center'>
          video chat Application
        </Typography>
      </AppBar>

      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>      
    </div>
  )
}

export default App