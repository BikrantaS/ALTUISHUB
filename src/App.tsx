import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
function App() {
  // const[clicked,setClicked]=useState(false);

  return (
    <>
    <Navbar onClick={()=>{setClicked(true);console.log("setreu")}}/>
    
      
    </>
    
      
  
  )
}

export default App
