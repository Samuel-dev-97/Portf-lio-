
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CodeIcon from '@mui/icons-material/Code';

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
           color: '#effa0d',
         }
       }}
>
       Desenvolvido e mantido  por <a href="mailto:samuelpssouza@gmail.com">Samuel Dev</a> <CodeIcon sx={{ verticalAlign: 'text-bottom', fontSize: 'inherit' }} />
     </Typography>


    </Box>
  </>
}

