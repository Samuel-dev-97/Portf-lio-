import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logotipo from '../assets/portfolio.png';
import MainMenu from './MainMenu'

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#E4E2E1' }}>
        <Toolbar variant="dense">
          
          <MainMenu />
           <a href="/">
          <img
            src={logotipo}
            style={{ width: 300, height: 'auto', display: 'block' }}
          />
        </a>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
