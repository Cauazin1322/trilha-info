# Trilha Info – Trilhas de Informática (IFRN – Campus Nova Cruz)

Plataforma web estática (HTML5 + CSS3 + JavaScript puro) desenvolvida como MVP do Projeto Integrador e instrumento de apoio pedagógico do curso **Técnico Integrado em Informática do IFRN – Campus Nova Cruz**.

## Equipe
- **Discentes:** Cauã Xavier Silva e Maria Isabela Nelo de Oliveira
- **Orientação:** Profª. Emanuelly Medeiros Bezerra Giacobbo Scavo

## Estrutura de Pastas
- `index.html` → Estrutura principal da aplicação, trilha interativa dos 4 anos, busca, painel da pesquisa e modal de estudo.
- `css/style.css` → Identidade visual inspirada no IFRN (verde `#2f9e41` e vermelho `#cd191e`), responsividade mobile e modo escuro (`data-theme="dark"`).
- `js/dados.js` → **Arquivo central de conteúdo**: link do formulário de pesquisa, disciplinas, playlists do YouTube, PDFs/links de exercícios, dicas de veteranos, compiladores mobile e quizzes.
- `js/app.js` → Lógica do sistema (XP, barra de progresso, ofensiva diária, filtros, modo escuro, player de vídeo e quizzes).
- `materiais/` → Subpastas organizadas por ano (`1-ano/`, `2-ano/`, `3-ano/`, `4-ano/`) e por disciplina com PDFs leves de resumo + lista de exercícios + gabarito para estudo offline.

## Como testar localmente (VS Code)
1. Abra a pasta `trilha-info` no VS Code (`File > Open Folder`).
2. Instale a extensão **Live Server** e clique em **Go Live** no canto inferior direito.
   *(Abrir via Live Server ou GitHub Pages evita o erro 153 do YouTube ao incorporar vídeos).*

## Como publicar gratuitamente no GitHub Pages
1. Crie um repositório público no GitHub (ex.: `trilha-info`).
2. Envie todo o conteúdo interno da pasta `trilha-info` (`index.html`, `css/`, `js/`, `materiais/`, `LEIAME.md`) para a raiz do repositório.
3. Vá em **Settings > Pages**, selecione a branch `main` (pasta `/root`) e clique em **Save**.
4. Use o link gerado para criar o QR Code dos slides da EXPOTEC.

## Como atualizar conteúdos no futuro (`js/dados.js`)
Abra `js/dados.js` e procure por `COLE AQUI`:
- **Formulário de Pesquisa:** em `CONFIG_PESQUISA.linkFormulario`, cole o link do Google Forms.
- **Vídeos:** em `PLAYLISTS`, cole o link da playlist (`?list=...`) ou vídeo do YouTube e informe o nome do canal.
- **PDFs e Listas:** salve o PDF em `materiais/<ano>/<pasta-da-disciplina>/` e informe o caminho em `EXERCICIOS`.
- **Dicas e Prática Mobile:** em `DICAS_E_MOBILE`, adicione orientações de veteranos e links de ferramentas online que funcionam no celular.
- **Quizzes:** em `QUIZ`, adicione perguntas no formato `["Pergunta", ["A", "B", "C", "D"], indiceCorreta, "Explicação", etapa]`.
