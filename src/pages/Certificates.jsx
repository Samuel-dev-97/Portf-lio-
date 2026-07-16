import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const CERTIFICATES = [
  {
    title: 'Ethical Hacker',
    issuer: 'Cisco',
    date: 'January 12, 2026',
    description:
      'Certificação Cisco Ethical Hacker comprovando habilidades em assessment de vulnerabilidades, exploração de redes e uso de ferramentas como Kali Linux e WebSploit.',
    url: 'https://www.credly.com/badges/14984d18-d688-41d9-adeb-578477c528ce',
    tags: ['Ethical Hacking', 'Penetration Testing', 'IoT Security'],
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    date: 'February 12, 2026',
    description:
      'Certificação Cisco Python Essentials 1 comprovando conhecimentos básicos de programação em Python, incluindo sintaxe, semântica, estrutura de código e resolução de desafios de implementação.',
    url: 'https://www.credly.com/badges/df1712c4-c36c-4af4-aaf2-373269da5d4b',
    tags: ['Python', 'Programação', 'Cisco'],
  },
]

export default function Certificates() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Certificados
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 700 }}>
        Aqui estão alguns certificados verificáveis que mostram parte da minha experiência em segurança e tecnologia.
      </Typography>

      <Grid container spacing={3}>
        {CERTIFICATES.map((certificate) => (
          <Grid item xs={12} md={6} key={certificate.url}>
            <Card sx={{ borderRadius: 3, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={1.5}>
                  <Typography variant="h5" component="h2">
                    {certificate.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                    {certificate.issuer} • {certificate.date}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>
                    {certificate.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ pt: 1 }}>
                    {certificate.tags.map((tag) => (
                      <Chip key={tag} label={tag} variant="outlined" />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
              <CardActions sx={{ px: 3, pb: 2 }}>
                <Button
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="secondary"
                  sx={{ textTransform: 'none' }}
                >
                  Ver certificado
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
