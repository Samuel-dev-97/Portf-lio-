Portfólio de Samuel Souza

Tecnologias Utilizadas

A construção do front-end deste portfólio emprega tecnologias web modernas e consolidadas. A estrutura fundamental da página é definida utilizando HTML5 semântico, garantindo acessibilidade e boa organização do conteúdo. A estilização visual é realizada com CSS3, potencializada pelo uso do pré-processador Sass, que permite uma escrita de CSS mais modular, organizada e eficiente. O arquivo main.css resultante contém todos os estilos compilados aplicados à aplicação.

A interatividade rica da página, que inclui a navegação dinâmica entre as seções, o funcionamento do slider de projetos e diversas animações, é implementada com JavaScript. Para facilitar a manipulação do DOM e o gerenciamento de eventos, a biblioteca jQuery é utilizada, como evidenciado nos arquivos functions.js (código fonte) e functions-min.js (versão minificada para produção). Adicionalmente, a biblioteca Hammer.js foi incorporada para oferecer suporte a gestos de toque (swipe) em dispositivos móveis, aprimorando a usabilidade em telas sensíveis ao toque. A biblioteca Font Awesome é utilizada para a inclusão de ícones vetoriais, enriquecendo a interface visual.

Estrutura do Projeto

O projeto está organizado da seguinte forma:

•
index.html: Este é o arquivo central da aplicação, contendo toda a marcação HTML que estrutura o conteúdo visível do portfólio.

•
assets/css/main.css: Arquivo CSS compilado que reúne todas as regras de estilo aplicadas ao site. É gerado a partir dos arquivos Sass.

•
assets/css/main.sass: O arquivo Sass principal que serve como ponto de entrada para a compilação dos estilos. Ele importa diversos outros arquivos .sass (não fornecidos no pacote inicial, mas cuja estrutura é indicada pelos imports), organizando os estilos em categorias como base, layouts e módulos.

•
assets/js/functions.js: Contém o código JavaScript não minificado responsável pela lógica de interatividade da página, incluindo a navegação single-page, o controle do slider, animações e a manipulação de eventos do formulário.

•
assets/js/functions-min.js: Versão minificada do functions.js. É esta versão que geralmente é referenciada no index.html para otimizar o tempo de carregamento da página em ambiente de produção.

•
assets/img/: Diretório inferido a partir das referências no index.html, destinado a armazenar todos os arquivos de imagem utilizados no design do portfólio.

•
assets/fonts/: Diretório inferido a partir das referências no main.css, contendo os arquivos das fontes customizadas (como a família Montserrat) utilizadas no projeto.

Funcionalidades Principais

O portfólio oferece diversas funcionalidades para proporcionar uma experiência completa ao visitante:

•
Navegação Fluida: A transição entre as seções (Home, Exercícios, Sobre mim, Contato, Contrate-me) é realizada de forma suave, podendo ser acionada pelo menu lateral, pelo menu principal ou através de scroll do mouse e gestos de swipe em dispositivos móveis.

•
Slider de Projetos: Na seção "Exercícios", um slider interativo permite visualizar diferentes projetos desenvolvidos por mim, com imagens, títulos e descrições.

•
Design Responsivo: O layout adapta-se elegantemente a diferentes resoluções de tela. Uma notificação específica é exibida em viewports menores ou em orientação paisagem em smartphones, sugerindo a visualização em modo retrato para uma melhor experiência.

•
Animações e Efeitos: Efeitos de transição e animações sutis são aplicados a diversos elementos da interface, tornando a interação mais dinâmica e agradável.

•
Informações de Contato: links diretos para: Github, LinkedIn e WhatsApp.

•
Formulário de Contratação: A seção "Contrate-me" inclui um formulário (atualmente um placeholder visual) que permite aos visitantes selecionar o tipo de serviço desejado (Estagiário, Desenvolvedor Júnior Front-end, Desenvolvedor Júnior Back-end) e enviar uma solicitação. Para funcionalidade completa, este formulário necessitaria de integração com um serviço de backend ou uma plataforma como Formspree.

Como Executar

Visualizar este portfólio é um processo simples e direto. Basta abrir o arquivo index.html localizado na raiz do projeto utilizando um navegador web moderno (como Google Chrome, Firefox, Safari ou Edge). Não há necessidade de compilar código, instalar dependências ou configurar um servidor local, pois todos os assets necessários (CSS compilado, JavaScript minificado, imagens e fontes) já estão incluídos e corretamente referenciados no HTML.

