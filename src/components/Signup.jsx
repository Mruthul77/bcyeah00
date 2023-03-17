import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>

      <br></br>
      <br></br>
      <Typography variant='h3' color='primary'>Signup to FB</Typography>
      <br></br>
      <br></br>
      <TextField label='Your name' variant='outlined'/>
      <br></br>
      <br></br>
      <TextField label='Ph.No' variant='outlined'/>
      <br></br>
      <br></br>
      <TextField label='Email' variant='outlined'/>
      <br></br>
      <br></br>
      <TextField type="password" label='Password' variant='outlined'/>
      <br></br>
      <br></br>
      <Button variant='filled' type="submit">Signup</Button>
      <br></br>
      <br></br>

    </div>
  )
}

export default Signup
