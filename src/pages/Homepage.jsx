
import React from 'react'
import '@fontsource/space-grotesk/700.css'
import './Homepage.css'
import { Box, Button, Chip, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function Homepage() {
  return (
    <main className="homepage-page">
      <section className="homepage-hero">
        <div className="hero-copy">
          <Typography variant="h2" component="h1" className="hero-title">
            Olá, eu sou Samuel
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Estudante de ADS na FATEC Franca.
          </Typography>
          <Typography variant="body1" className="hero-description">
            Como estudante de Análise e Desenvolvimento de Sistemas, aprofundo 
meu aprendizado em desenvolvimento back-end, buscando aos poucos me 
tornar fullstack a cada linha de código escrita e lida. Também 
desenvolvo noções de segurança da informação ao longo do caminho, 
com o objetivo de dominar cada camada do desenvolvimento, do banco 
de dados à interface.
          </Typography>

          <div className="hero-tags">
            <Chip label="Back-end" size="small" />
            <Chip label="Cybersecurity" size="small" />
            <Chip label="Front-end" size="small" />
            <Chip label="Linux / Pop!_OS" size="small" />
          </div>

          <Button
            href="#about"
            variant="contained"
            color="secondary"
            className="hero-button"
            endIcon={<ArrowRightAltIcon />}
          >
            Saiba mais
          </Button>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <span className="hero-glow" />
            <Typography variant="h6" className="hero-card-title">
              Cybersecurity & Code
            </Typography>
            <Typography variant="body2" className="hero-card-text">
              Construindo minha base em desenvolvimento back-end, enquanto aprofundo
              conhecimentos em redes, sistemas operacionais e segurança.
            </Typography>
            <div className="hero-pill-list">
              <span>React</span>
              <span>APIs</span>
              <span>Redes</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="homepage-about">
        <article className="about-card">
          <Typography variant="h3">Foco prático</Typography>
          <Typography>
            Busco oportunidades para aplicar conhecimento em projetos reais com ênfase em
            desenvolvimento back-end.
          </Typography>
        </article>

        <article className="about-card">
          <Typography variant="h3">Estudo e Prática</Typography>
          <Typography>
           Atualmente estudo Java, Python e JavaScript, com foco em React
  no front-end e HTML/CSS na estruturação de interfaces. Também
  gosto muito do ambiente Linux (Pop!_OS).
          </Typography>
        </article>
      </section>
    </main>
  )
}

