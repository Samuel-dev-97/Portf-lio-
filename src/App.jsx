import { useState } from 'react'
import skullLogo from './assets/skull.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderBar from './ui/HeaderBar'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme'
import FooterBar from './ui/FooterBar'


function App() {
 return (
   <>
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <HeaderBar />
      <FooterBar />
      </BrowserRouter>
   </ThemeProvider>
 
   </>
 )
}


export default App
