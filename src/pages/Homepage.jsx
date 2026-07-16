
import '@fontsource/space-grotesk/700.css'
import { Box, Button, Chip, GlobalStyles, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import profileImage from '../assets/git.jpeg'

const globalStyles = `
  @keyframes floatCard {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-16px);
    }
  }

  @keyframes glowTitle {
    from {
      text-shadow: 0 0 0 rgba(255, 209, 102, 0);
    }
    to {
      text-shadow: 0 0 18px rgba(255, 209, 102, 0.22);
    }
  }
`

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <Box
        component="main"
        sx={{
          minHeight: 'calc(100vh - 120px)',
          padding: { xs: '64px 24px 48px', md: '64px 32px 48px' },
          display: 'flex',
          flexDirection: 'column',
          gap: '42px',
          background:
            'radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 22%), radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.06), transparent 20%), linear-gradient(180deg, #05070f 0%, #0e1320 100%)',
          color: '#f6f6f8',
        }}
      >
        <Box
          component="section"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
            gap: { xs: 4, md: 4 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: 'clamp(2.4rem, 6vw, 3.4rem)', md: 'clamp(2.8rem, 5vw, 4rem)' },
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                maxWidth: '680px',
                animation: 'glowTitle 6s ease-in-out infinite alternate',
                fontFamily:
                  'Space Grotesk, Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                fontWeight: 700,
              }}
            >
              Olá, sou o Samuel
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.78)', maxWidth: '640px' }}>
              Estudante de ADS na FATEC Franca.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                maxWidth: '640px',
                color: 'rgba(255, 255, 255, 0.68)',
                lineHeight: 1.8,
              }}
            >
              Como estudante de Análise e Desenvolvimento de Sistemas, aprofundo meu aprendizado em
              desenvolvimento back-end, buscando aos poucos me tornar fullstack a cada linha de código
              escrita e lida. Também desenvolvo noções de segurança da informação ao longo do caminho,
              com o objetivo de dominar cada camada do desenvolvimento, do banco de dados à interface.
            </Typography>

            <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap sx={{ mt: 1.5 }}>
              <Chip label="Back-end" size="small" />
              <Chip label="Cybersecurity" size="small" />
              <Chip label="Front-end" size="small" />
            </Stack>

            <Button
              onClick={() => navigate('/projetos')}
              variant="contained"
              color="secondary"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                textTransform: 'none',
                padding: '0.95rem 1.8rem',
                width: 'fit-content',
                borderRadius: 999,
              }}
            >
              Saiba mais
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '360px',
                minHeight: '360px',
                padding: '34px',
                borderRadius: '32px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 28px 70px rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(18px)',
                overflow: 'hidden',
                animation: 'floatCard 7s ease-in-out infinite',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at top right, rgba(255, 239, 172, 0.15), transparent 30%)',
                  pointerEvents: 'none',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(102, 255, 233, 0.22), transparent 55%)',
                  filter: 'blur(26px)',
                  top: '-50px',
                  right: '-40px',
                }}
              />
              <Box
                component="img"
                src={profileImage}
                alt="Imagem de perfil"
                sx={{
                  width: '100%',
                  maxWidth: '100px',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  display: 'block',
                  mx: 'auto',
                  mb: 3,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.03em' }}>
                Cybersecurity & Code
              </Typography>
              <Typography variant="body2" sx={{ mt: 1.75, color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.75 }}>
                Construindo minha base em desenvolvimento back-end, enquanto aprofundo conhecimentos em
                redes, sistemas operacionais e segurança.
              </Typography>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ mt: 3.5 }}>
                
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box component="section" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: '24px' }}>
          <Box
            sx={{
              padding: '32px 30px',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 18px 32px rgba(0, 0, 0, 0.18)',
              transition: 'transform 0.28s ease, background 0.28s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                background: 'rgba(255, 255, 255, 0.09)',
              },
            }}
          >
            <Typography variant="h3" sx={{ mb: '18px', color: '#fff' }}>
              Foco prático
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.78 }}>
              Busco oportunidades para aplicar conhecimento em projetos reais com ênfase em desenvolvimento back-end.
            </Typography>
          </Box>

          <Box
            sx={{
              padding: '32px 30px',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 18px 32px rgba(0, 0, 0, 0.18)',
              transition: 'transform 0.28s ease, background 0.28s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                background: 'rgba(255, 255, 255, 0.09)',
              },
            }}
          >
            <Typography variant="h3" sx={{ mb: '18px', color: '#fff' }}>
              Estudos e Práticas
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.78 }}>
              Atualmente estudo Java, Python e JavaScript, com foco em React no front-end e HTML/CSS na
              estruturação de interfaces. Também gosto muito do ambiente Linux (Pop!_OS).
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

