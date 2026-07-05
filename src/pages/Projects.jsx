import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Projects() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Projetos
      </Typography>
      <Typography>
        Aqui você pode listar seus projetos, com links e descrições resumidas.
      </Typography>
    </Container>
  )
}
