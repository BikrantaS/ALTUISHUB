import React from 'react'
import { useState } from 'react'
// import AppBar from '@mui/material/AppBar';

// import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
import Menu from './Menu';
import {AppBar,Toolbar,Typography} from "@mui/material"
const[clicked,setClicked]=useState(false);

const Navbar = () => {

    function showOptions()
    {
        setClicked(true);
    }
  return (
    <>
<AppBar position='static'>
    <Toolbar>
    <MenuIcon onClick={()=>{console.log("sdf");showOptions()}
    }/>
        <Typography>
            TEST
        </Typography>
    </Toolbar>
</AppBar>

{clicked && <Menu />}
</>
  
  )
}

export default Navbar