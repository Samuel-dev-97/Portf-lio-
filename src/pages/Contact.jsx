import { Box, Button, Stack, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import developerSkillsImage from '../assets/developer skills.svg'

const phoneNumber = '5516991212581'
const whatsappMessage = encodeURIComponent('Olá, vim pelo seu portfólio. Gostaria de conversar sobre um projeto ou oportunidade.')
const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

const cardSx = {
  p: { xs: 3, md: 3.5 },
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: '0 16px 32px rgba(0, 0, 0, 0.18)',
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samuel-souza-977918236/',
    icon: <LinkedInIcon />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Samuel-dev-97',
    icon: <GitHubIcon />,
  },
]

export default function Contact() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: 'calc(100vh - 120px)',
        px: { xs: 3, md: 4 },
        py: { xs: 6, md: 8 },
        background:
          'radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 22%), radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.06), transparent 20%), linear-gradient(180deg, #05070f 0%, #0e1320 100%)',
        color: '#f6f6f8',
      }}
    >
      <Box sx={{ maxWidth: '860px', mx: 'auto', display: 'grid', gap: 3 }}>
        <Box component="section" aria-labelledby="contact-title" sx={{ ...cardSx, p: { xs: 3.5, md: 4.5 } }}>
          <Typography id="contact-title" variant="h3" component="h1" sx={{ mb: 1.25, fontWeight: 700, letterSpacing: '-0.03em' }}>
            Contato
          </Typography>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.74)', lineHeight: 1.8, maxWidth: '720px' }}>
            Se quiser bater um papo sobre projetos, oportunidades ou só trocar ideia, me chama por aqui.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              startIcon={<WhatsAppIcon />}
              sx={{ px: 2.5, py: 1.1, width: { xs: '100%', sm: 'fit-content' } }}
            >
              Enviar mensagem no WhatsApp
            </Button>
          </Stack>
        </Box>

        <Box component="section" aria-labelledby="social-title" sx={cardSx}>
          <Typography id="social-title" variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
            Redes e perfis
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            {socialLinks.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={item.icon}
                sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.24)', px: 2.2, py: 1, justifyContent: 'flex-start', minWidth: { xs: '100%', sm: 'auto' } }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 0.5 }}>
          <Box
            component="img"
            src={developerSkillsImage}
            alt="Ilustração de desenvolvimento"
            sx={{
              width: { xs: '100%', sm: '72%', md: '56%' },
              maxWidth: '400px',
              display: 'block',
              borderRadius: '20px',
              opacity: 0.95,
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
