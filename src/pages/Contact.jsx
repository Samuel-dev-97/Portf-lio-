import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Contact() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contato
      </Typography>
      <Typography>
        Inclua seu e-mail, LinkedIn ou outras formas de contato aqui.
      </Typography>
    </Container>
  )
}
