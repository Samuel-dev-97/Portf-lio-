import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const MENU_ITEMS = [
  { label: 'Página Inicial', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Certificados', to: '/certificados' },
  { label: 'Contato', to: '/contato' },
]

export default function MainMenu() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  if (isDesktop) {
    return (
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        {MENU_ITEMS.map((item) => (
          <Button
            key={item.to}
            component={Link}
            to={item.to}
            color="inherit"
            sx={{ textTransform: 'none' }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    )
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{ list: { 'aria-labelledby': 'basic-button' } }}
      >
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.to} component={Link} to={item.to} onClick={handleClose}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
