import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const App = () => {
  return (
    <>
      <h1>Text Button</h1>
      <Button variant="text"  >Click me</Button>
      <Button color='secondary'>secondary</Button>
      <Button color='primary' href='http://www.google.com'>Link</Button>
      <Button disabled>Disabled</Button>
      <h1>contained Button</h1>
      <Button variant='contained' size='large'>Click Me</Button>
      <Button variant='contained' color='secondary'>Click Me</Button>
      <Button variant='contained' color='primary' href='http://www.google.com'>Click Me</Button>
      <Button variant='contained' color='primary' disabled>Click Me</Button>
      <h1>outlined Button</h1>
      <Button variant='outlined'>Click Me</Button>
      <Button variant='outlined' color='secondary'>Click Me</Button>
      <Button variant='outlined' color='primary' href='http://www.google.com'>Click Me</Button>
      <Button variant='outlined' color='primary' disabled>Click Me</Button>
      <h1>Button with icon</h1>
      <Button variant='contained' color='secondary' startIcon={<DeleteIcon/>} >Delete</Button>
      <Button variant='contained'  endIcon={<DeleteIcon/>} color='warning' >Delete</Button>
      <h1>Button icons</h1>
      <IconButton color='secondary'>
        <DeleteIcon/>
      </IconButton>
      <h1>Custom Buttons</h1>
      <Button variant='contained' style={{backgroundColor:'green'}}>custom1</Button>
      <Button variant='contained' sx={{backgroundColor:'red'}}>custom2</Button>
      <h1>Button with Click Event</h1>
      <Button variant='contained' onClick={()=>{alert('clicked')}} >Click Me</Button>
    
   </>
  )
}

export default App;
