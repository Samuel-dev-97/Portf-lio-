import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import videoDemo from '../assets/bI.mp4'

const projects = [
  {
    id: 'analise-dados',
    category: 'DASHBOARD BI',
    title: 'Análise de dados',
    summary: 'Painel desenvolvido no Power BI com dados do Kaggle e visual criado no Figma.',
    description:
      'Projeto focado em transformar dados brutos em insights claros, com organização, visualização e interpretação de tendências.',
    highlights: ['Limpeza e organização de dados', 'Análises exploratórias', 'Resumo de padrões'],
    tools: ['Python', 'Pandas', 'Power BI'],
    video: videoDemo,
  },
  {
    id: 'portfolio-pessoal',
    category: 'Projeto pessoal',
    title: 'Portfólio pessoal',
    summary: 'Site desenvolvido para apresentar minha trajetória e projetos da faculdade.',
    description:
      'Portfólio criado com React, Vite, MUI e React Router, com páginas para apresentação, projetos, certificados e contato.',
    highlights: ['Navegação entre páginas', 'Layout responsivo', 'Estrutura organizada para apresentação pessoal'],
    tools: ['React', 'Vite', 'MUI', 'React Router'],
    video: null,
  },
  {
    id: 'proximo-projeto',
    category: 'Em breve',
    title: 'Próximo projeto',
    summary: 'próximo projeto que será adicionado futuramente.',
    description:
      'Aguardando a inclusão de um novo trabalho ou estudo prático.',
    highlights: [],
    tools: ['Em breve'],
    video: null,
  },
]

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState(projects[0].id)

  const toggleProject = (id) => {
    setOpenProjectId((currentId) => (currentId === id ? null : id))
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Projetos
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 700 }}>
        Meus trabalhos acadêmicos e projetos pessoais. 
      </Typography>

      <Stack spacing={2}>
        {projects.map((project) => {
          const isOpen = openProjectId === project.id

          return (
            <Card key={project.id} sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardActionArea onClick={() => toggleProject(project.id)} sx={{ p: { xs: 2.5, md: 3 } }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={2}
                >
                  <Box>
                    <Typography
                      variant="overline"
                      color="primary"
                      sx={{ fontWeight: 700, letterSpacing: 1.5 }}
                    >
                      {project.category}
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography color="text.secondary">{project.summary}</Typography>
                  </Box>

                  <Chip label={isOpen ? 'Ocultar' : 'Ver projeto'} color="primary" variant="outlined" />
                </Stack>
              </CardActionArea>

              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <CardContent sx={{ px: { xs: 3, md: 4 }, pb: { xs: 3, md: 4 } }}>
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ mb: 3 }}
                  >
                    <Box>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography color="text.secondary">{project.description}</Typography>
                    </Box>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.tools.map((tool) => (
                        <Chip key={tool} label={tool} variant="outlined" />
                      ))}
                    </Stack>
                  </Stack>

                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    O que foi feito
                  </Typography>
                  <Stack component="ul" spacing={1} sx={{ pl: 2.5, mb: 3 }}>
                    {project.highlights.map((item) => (
                      <Typography component="li" key={item} color="text.secondary">
                        {item}
                      </Typography>
                    ))}
                  </Stack>

                  {project.video ? (
                    <>
                      <Typography variant="h6" sx={{ mb: 1.5 }}>
                        Vídeo do projeto
                      </Typography>
                      <Typography color="text.secondary" sx={{ mb: 3 }}>
                        Demonstração do painel criado no Power BI com dados do Kaggle, incluindo a proposta visual desenvolvida no Figma.
                      </Typography>

                      <Box
                        component="video"
                        src={project.video}
                        controls
                        playsInline
                        sx={{
                          width: '100%',
                          maxWidth: 760,
                          borderRadius: 2,
                          backgroundColor: '#000',
                          display: 'block',
                        }}
                      />
                    </>
                  ) : project.id === 'portfolio-pessoal' ? (
                    <Typography color="text.secondary">
                      Você pode ver mais detalhes no repositório do projeto:{' '}
                      <Box
                        component="a"
                        href="https://github.com/Samuel-dev-97/Portf-lio-"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        github.com/Samuel-dev-97/Portf-lio-
                      </Box>
                    </Typography>
                  ) : (
                    <Typography color="text.secondary">
                      Este projeto ainda será detalhado em breve.
                    </Typography>
                  )}
                </CardContent>
              </Collapse>
            </Card>
          )
        })}
      </Stack>
    </Container>
  )
}
