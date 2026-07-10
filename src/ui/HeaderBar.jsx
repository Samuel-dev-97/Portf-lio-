import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import logotipo from '../assets/portfolio.png'
import MainMenu from './MainMenu'

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#0d0d0f' }}>
        <Toolbar
          variant="dense"
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 160 }}>
            <a href="/" aria-label="home">
              <img src={logotipo} style={{ height: 100, display: 'block' }} alt="logo" />
            </a>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
            <MainMenu />
          </Box>

          <Box sx={{ minWidth: 160 }} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
