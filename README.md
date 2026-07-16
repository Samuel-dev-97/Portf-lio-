# React + Vite
# Portf-lio — Samuel Dev

Link ao site: https://samueldev97.vercel.app/

Um portfólio pessoal construído com React + Vite para apresentar projetos, certificados e informações de contato. O site valoriza simplicidade, desempenho e uma navegação direta para quem visita meus trabalhos.

## Principais funcionalidades
- Página inicial com apresentação e destaques.
- Seção de projetos com imagens e links.
- Página de certificados.
- Página de contato com informações para contato.
- Layout responsivo e tema consistente com Material UI.

## Tecnologias
- React (v19) + Vite
- Material UI (@mui/material) + Emotion (estilização)
- React Router (react-router-dom) para navegação
- JavaScript, CSS, HTML

## Estrutura do projeto (resumo)
- public/ — arquivos estáticos servidos pelo Vite
- src/
  - main.jsx — entrada da aplicação
  - App.jsx — componente pai
  - pages/ — Homepage, Projects, Certificates, Contact
  - ui/ — Header, Footer, menu e tema (MUI)
  - assets/ — imagens, ícones e mídia usados no site
  - routes/ — definição das rotas da aplicação

## Como rodar localmente
1. Clone o repositório:
   git clone https://github.com/Samuel-dev-97/Portf-lio-.git
2. Entre na pasta do projeto:
   cd Portf-lio-
3. Instale dependências:
   npm install
4. Rode em modo de desenvolvimento:
   npm run dev
5. Build de produção:
   npm run build
6. Pré-visualizar o build:
   npm run preview

> O deploy atual está hospedado em Vercel no link acima.

## Deploy
O projeto já está no ar em Vercel: https://samueldev97.vercel.app/  
Para fazer deploy em Vercel: conectar o repositório e usar o script de build `npm run build` (Vite). Alternativamente, pode ser publicado em Netlify ou GitHub Pages com ajustes mínimos.

## Contribuições
Este repositório representa um portfólio pessoal; contribuições externas não são necessárias, mas sugestões são bem-vindas. Se quiser, abra uma issue descrevendo a sugestão ou envie um pull request pequeno (por exemplo: correção de texto, otimização de imagem, melhoria de acessibilidade).

## Contato
- Perfil GitHub: https://github.com/Samuel-dev-97  
- Site (demo): https://samueldev97.vercel.app/

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
