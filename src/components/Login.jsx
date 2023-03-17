import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <br></br>
      <br>
      </br>
      <Typography variant='h3' color='primary'>Login to FB</Typography>
      <br>
      </br>
      <br></br>
      <TextField label='email' variant='outlined'/>
      <br></br>
      <br></br>
      <TextField type="password" label='passsword' variant='outlined'/>
      <br></br>
      <br></br>
      <button type="submit">Login</button>
      <br></br>
      <Button type="submit">Forgotten password?</Button>
     </div>
  )
}

export default Login
