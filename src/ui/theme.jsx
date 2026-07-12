import { createTheme } from '@mui/material/styles'
import { yellow, pink } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 999,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: 999,
        },
      },
    },
  },
})

export default theme
