
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function FooterBar() {
return <>
  <Box
    component="footer"
    sx={{
      backgroundColor: 'action.disabledBackground',
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',   
      bottom: 0,           
      width: '100vw'
    }}
    >
        <Typography variant="caption"
        sx={{
         '& a': {   
           color: 'secondary.main'
         }
       }}
>
       Desenvolvido e mantido por <a href="mailto:">Samuelpssouza@gmail.com</a>
     </Typography>

    </Box>
  </>
}

