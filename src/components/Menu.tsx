import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';




const Menu = () => {

    
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
            <MenuItem>
            
            <Typography variant="body2" color="text.secondary">
                Invoices
            </Typography>
            </MenuItem>

            
           

      </MenuList>
    </Paper>
  )
}

export default Menu