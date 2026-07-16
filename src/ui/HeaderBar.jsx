import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Link } from 'react-router-dom'
import logotipo from '../assets/portfolio.png'
import MainMenu from './MainMenu'

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#0d0d0f' }}>
        <Toolbar
          variant="dense"
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <Box component={Link} to="/" aria-label="home">
            <img src={logotipo} style={{ height: 100, display: 'block' }} alt="logo" />
          </Box>

              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <MainMenu />
              </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
