import React from 'react'
import './App.css'
import { User } from './components/User'
import { Button } from '@chakra-ui/react'

function App() {
  return (
    <>
      <div>
        <User name="Leart" placeholder="Enter your name: " />
        <User name="John" placeholder="Enter your name: " />
       
       <Button backgroundColor="gray.100" margin="10px" >Send!</Button>
      </div>
    </>
  )
}

export default App
