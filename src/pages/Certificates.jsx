import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Certificates() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Certificados
      </Typography>
      <Typography>
        Mostre seus certificados mais importantes e as instituições responsáveis.
      </Typography>
    </Container>
  )
}
