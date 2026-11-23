// ============================================================
//  CONFIGURAÇÃO DA PESQUISA (COLE AQUI O LINK DO SEU GOOGLE FORMS)
// ============================================================
const CONFIG_PESQUISA = {
  titulo: "Pesquisa Diagnóstica: Acesso a Materiais e Apoio aos Estudos",
  descricao:
    "Ao terminar uma etapa, responda ao quiz rápido e participe do levantamento diagnóstico sobre acesso a computador, internet e deslocamento no curso Técnico em Informática (IFRN – Campus Nova Cruz). Nenhuma resposta vale nota e nenhum dado pessoal será divulgado.",
  linkFormulario: "", // <- COLE AQUI o link do seu Google Forms (ex.: "https://forms.gle/...")
  textoBotao: "Responder Formulário da Pesquisa",
};

// ============================================================
//  DADOS DO SITE: disciplinas e etapas (1º ao 4º ano)
// ============================================================
const YEARS = [
  {
    n: 1,
    t: "Primeiros passos",
    d: "Lógica, páginas web, o computador no dia a dia e a base de eletricidade.",
    disciplinas: [
      {
        nome: "Introdução à Programação",
        etapas: [
          "Lógica e algoritmos",
          "Variáveis e tipos de dados",
          "Condicionais (se/senão)",
          "Laços de repetição",
          "Vetores e funções",
        ],
      },
      {
        nome: "Autoria Web",
        etapas: [
          "HTML: estrutura de uma página",
          "CSS: cores e textos",
          "Layout e responsividade",
          "Publicando sua página",
        ],
      },
      {
        nome: "Educação em Tecnologias Digitais",
        etapas: [
          "Uso seguro do computador",
          "Arquivos e pastas",
          "Editor de texto e planilhas",
          "Cidadania digital",
        ],
      },
      {
        nome: "Eletricidade Instrumental",
        etapas: [
          "Grandezas elétricas",
          "Lei de Ohm",
          "Circuitos série e paralelo",
          "Potência e energia",
        ],
      },
      {
        nome: "Matemática I (apoio)",
        etapas: ["Conjuntos e lógica", "Funções", "Progressões"],
      },
    ],
  },
  {
    n: 2,
    t: "Construindo bases",
    d: "Orientação a objetos, bancos de dados, redes e o hardware por dentro.",
    disciplinas: [
      {
        nome: "Programação Orientada a Objetos",
        etapas: [
          "Classes e objetos",
          "Encapsulamento",
          "Herança e polimorfismo",
          "Tratamento de erros",
        ],
      },
      {
        nome: "Projeto de Banco de Dados",
        etapas: [
          "Modelo entidade-relacionamento",
          "Modelo relacional",
          "SQL básico",
        ],
      },
      {
        nome: "Redes de Computadores",
        etapas: [
          "Conceitos e topologias",
          "Modelo OSI e TCP/IP",
          "Endereçamento IP",
        ],
      },
      {
        nome: "Organização e Montagem de Computadores",
        etapas: [
          "Componentes do computador",
          "Sistemas de numeração",
          "Montagem passo a passo",
        ],
      },
      {
        nome: "Eletrônica",
        etapas: [
          "Componentes eletrônicos",
          "Diodos e transistores",
          "Circuitos digitais",
        ],
      },
    ],
  },
  {
    n: 3,
    t: "Colocando em prática",
    d: "Web, banco de dados na prática, projeto de software e manutenção.",
    disciplinas: [
      {
        nome: "Programação para Internet",
        etapas: [
          "HTML, CSS e JavaScript",
          "Requisições e formulários",
          "Back-end básico",
        ],
      },
      {
        nome: "Programação com Acesso a Banco de Dados",
        etapas: ["Conexão com o banco", "CRUD", "Consultas e relatórios"],
      },
      {
        nome: "Projeto de Desenvolvimento de Software",
        etapas: [
          "Levantamento de requisitos",
          "Modelagem (UML)",
          "Desenvolvimento em equipe",
          "Testes e entrega",
        ],
      },
      {
        nome: "Infraestrutura de Redes",
        etapas: [
          "Cabeamento e equipamentos",
          "Roteamento e sub-redes",
          "Serviços de rede",
        ],
      },
      {
        nome: "Manutenção de Computadores",
        etapas: [
          "Diagnóstico de falhas",
          "Manutenção preventiva",
          "Instalação de sistemas",
        ],
      },
    ],
  },
  {
    n: 4,
    t: "Reta final",
    d: "Sistemas operacionais de rede e tópicos específicos.",
    disciplinas: [
      {
        nome: "Sistemas Operacionais de Redes",
        etapas: [
          "Linux no terminal",
          "Usuários e permissões",
          "Serviços e servidores",
        ],
      },
      {
        nome: "Tópicos Específicos em Informática I",
        etapas: ["Tema 1", "Tema 2", "Tema 3"],
      },
      {
        nome: "Tópicos Específicos em Informática II",
        etapas: ["Tema 1", "Tema 2", "Tema 3"],
      },
    ],
  },
];

// ============================================================
//  1) PLAYLISTS E VIDEOAULAS (YouTube)
//  Em playlist: cole o link da playlist (?list=...) ou vídeo (youtu.be/...).
//  Em canal: escreva o nome do canal para dar o devido crédito.
// ============================================================
const PLAYLISTS = {
  // ---------- 1º ANO ----------
  "Introdução à Programação": {
    playlist: "https://youtu.be/ycyL5CqZoUo?si=pnFY16u_RnJR2lpM",
    canal: "YouTube (Curadoria Trilha Info)",
  },
  "Autoria Web": {
    playlist: "https://youtu.be/nlO5hySqJFA?si=R54RnTNwHk230g_5",
    canal: "Curso em Vídeo (Gustavo Guanabara)",
  },
  "Educação em Tecnologias Digitais": { playlist: "", canal: "" }, // <- COLE AQUI
  "Eletricidade Instrumental": {
    playlist: "https://youtu.be/IisroPnqW1w?si=F4wY7fvk3BNmZ5JF",
    canal: "Hexag Educacional",
  },
  "Matemática I (apoio)": {
    playlist: "https://youtu.be/e78_5WIssSU?si=9IWmfxIaaeqhDUxf",
    canal: "Professor Ferretto",
  },
  // ---------- 2º ANO ----------
  "Programação Orientada a Objetos": { playlist: "", canal: "" }, // <- COLE AQUI
  "Projeto de Banco de Dados": { playlist: "", canal: "" }, // <- COLE AQUI
  "Redes de Computadores": { playlist: "", canal: "" }, // <- COLE AQUI
  "Organização e Montagem de Computadores": { playlist: "", canal: "" }, // <- COLE AQUI
  "Eletrônica": { playlist: "", canal: "" }, // <- COLE AQUI
  // ---------- 3º ANO ----------
  "Programação para Internet": { playlist: "", canal: "" }, // <- COLE AQUI
  "Programação com Acesso a Banco de Dados": { playlist: "", canal: "" }, // <- COLE AQUI
  "Projeto de Desenvolvimento de Software": { playlist: "", canal: "" }, // <- COLE AQUI
  "Infraestrutura de Redes": { playlist: "", canal: "" }, // <- COLE AQUI
  "Manutenção de Computadores": { playlist: "", canal: "" }, // <- COLE AQUI
  // ---------- 4º ANO ----------
  "Sistemas Operacionais de Redes": { playlist: "", canal: "" }, // <- COLE AQUI
  "Tópicos Específicos em Informática I": { playlist: "", canal: "" }, // <- COLE AQUI
  "Tópicos Específicos em Informática II": { playlist: "", canal: "" }, // <- COLE AQUI
};

// ============================================================
//  2) EXERCICIOS (PDFs offline e links externos por etapa)
//  Quando arquivo e url estão preenchidos, o aluno vê os dois botões:
//  - PDF Offline (leve, ideal para baixar na escola e ler no ônibus)
//  - Google Drive / Link Externo
// ============================================================
const EXERCICIOS = {
  // ---------- 1º ANO ----------
  "Introdução à Programação": {
    0: [
      {
        titulo: "Resumo e Lista – Etapa 1",
        arquivo: "materiais/1-ano/introducao-a-programacao/introducao_programacao.pdf",
        url: "https://drive.google.com/file/d/1uIJoMx7KendUcSubb5behmZ3oUX3JE09/view?usp=sharing",
      },
    ],
    1: [
      {
        titulo: "Resumo e Lista – Etapa 2",
        arquivo: "materiais/1-ano/introducao-a-programacao/introducao_etapa2.pdf",
        url: "https://drive.google.com/file/d/1P4y4VlAbY5-2sJhXrEbstfeL4z2NzRVA/view?usp=sharing",
      },
    ],
    2: [
      {
        titulo: "Resumo e Lista – Etapa 3",
        arquivo: "materiais/1-ano/introducao-a-programacao/introducao_etapa3.pdf",
        url: "https://drive.google.com/file/d/1FypMEYssL8ueRhcnzFtsLc8a19Fb24nZ/view?usp=sharing",
      },
    ],
    3: [
      {
        titulo: "Resumo e Lista – Etapa 4",
        arquivo: "materiais/1-ano/introducao-a-programacao/introducao_etapa4.pdf",
        url: "https://drive.google.com/file/d/1b-6puafxR9UsfvO8YK7Ojjzhz2NUHkWB/view?usp=sharing",
      },
    ],
    4: [
      {
        titulo: "Resumo e Lista – Etapa 5",
        arquivo: "materiais/1-ano/introducao-a-programacao/introducao_etapa5.pdf",
        url: "https://drive.google.com/file/d/1ppvZ10Aph2Mb9oFu-vqAgm3DH5RWuhwM/view?usp=sharing",
      },
    ],
  },
  "Autoria Web": {
    0: [
      {
        titulo: "Resumo e Lista – HTML",
        arquivo: "materiais/1-ano/autoria-web/autoria_web_etapa1.pdf",
        url: "https://drive.google.com/file/d/1hDXAMmw0WogRZnDayF_Ic5axADjadEEN/view?usp=sharing",
      },
    ],
    1: [
      {
        titulo: "Resumo e Lista – CSS",
        arquivo: "materiais/1-ano/autoria-web/autoria_web_etapa2.pdf",
        url: "https://drive.google.com/file/d/1gCNc1_qsrJm-0HBqgMF4BMeZLP70ZVdP/view?usp=sharing",
      },
    ],
    2: [
      {
        titulo: "Resumo e Lista – Layout",
        arquivo: "materiais/1-ano/autoria-web/autoria_web_etapa3.pdf",
        url: "",
      },
    ],
    3: [
      {
        titulo: "Resumo e Lista – Publicação",
        arquivo: "materiais/1-ano/autoria-web/autoria_web_etapa4.pdf",
        url: "",
      },
    ],
  },
  "Educação em Tecnologias Digitais": {
    0: [
      {
        titulo: "Guia de Organização e Segurança",
        arquivo: "materiais/1-ano/educacao-em-tecnologias-digitais/etd_etapa1.pdf",
        url: "",
      },
    ],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }], // <- COLE AQUI
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }], // <- COLE AQUI
    3: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }], // <- COLE AQUI
  },
  "Eletricidade Instrumental": {
    0: [
      {
        titulo: "Resumo e Lista – Grandezas e Lei de Ohm",
        arquivo: "materiais/1-ano/eletricidade-instrumental/eletricidade_etapa1.pdf",
        url: "",
      },
    ],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }], // <- COLE AQUI
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }], // <- COLE AQUI
    3: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }], // <- COLE AQUI
  },
  "Matemática I (apoio)": {
    0: [
      {
        titulo: "Resumo e Lista – Conjuntos e Lógica",
        arquivo: "materiais/1-ano/matematica-i-apoio/conjuntosmat.pdf",
        url: "",
      },
    ],
    1: [
      {
        titulo: "Resumo e Lista – Funções",
        arquivo: "materiais/1-ano/matematica-i-apoio/funcoes.pdf",
        url: "",
      },
    ],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }], // <- COLE AQUI
  },
  // ---------- 2º ANO ----------
  "Programação Orientada a Objetos": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    3: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Projeto de Banco de Dados": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Redes de Computadores": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Organização e Montagem de Computadores": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Eletrônica": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  // ---------- 3º ANO ----------
  "Programação para Internet": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Programação com Acesso a Banco de Dados": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Projeto de Desenvolvimento de Software": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    3: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Infraestrutura de Redes": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Manutenção de Computadores": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  // ---------- 4º ANO ----------
  "Sistemas Operacionais de Redes": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Tópicos Específicos em Informática I": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
  "Tópicos Específicos em Informática II": {
    0: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    1: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
    2: [{ titulo: "Lista de exercícios", arquivo: "", url: "" }],
  },
};

// ============================================================
//  3) DICAS DE VETERANOS & FERRAMENTAS PARA PRATICAR NO CELULAR
// ============================================================
const DICAS_E_MOBILE = {
  "Introdução à Programação": {
    dicas: [
      "Esta é a disciplina-base de todo o curso: domine bem condicionais e laços de repetição no 1º ano, pois você vai usá-los em POO, Web e Banco de Dados.",
      "Não tente decorar código: faça o 'teste de mesa' no papel acompanhando o valor de cada variável linha por linha.",
      "Baixe os PDFs das etapas no Wi-Fi do IFRN para revisar a lógica durante o trajeto do ônibus.",
    ],
    ferramentas: [
      { nome: "Programiz Python Online (roda no navegador)", url: "https://www.programiz.com/python-programming/online-compiler/" },
      { nome: "OneCompiler – Portugol / Python / C", url: "https://onecompiler.com/" },
    ],
  },
  "Autoria Web": {
    dicas: [
      "Sempre nomeie seu arquivo principal como index.html e evite espaços ou acentos nos nomes das pastas e imagens.",
      "Use o inspetor do navegador (F12 no PC) para testar cores e espaçamentos antes de alterar o arquivo CSS.",
    ],
    ferramentas: [
      { nome: "W3Schools Tryit Editor (HTML/CSS ao vivo)", url: "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" },
      { nome: "JSFiddle – Testar HTML, CSS e JS no celular", url: "https://jsfiddle.net/" },
    ],
  },
  "Matemática I (apoio)": {
    dicas: [
      "Teoria dos Conjuntos e Lógica Matemática ajudam diretamente a entender operadores AND/OR na programação e consultas SQL.",
      "Refaça as listas de funções antes das avaliações de programação, pois funções matemáticas têm a mesma lógica de entrada e saída.",
    ],
    ferramentas: [
      { nome: "GeoGebra Calculadora Gráfica Online", url: "https://www.geogebra.org/graphing" },
    ],
  },
  "Eletricidade Instrumental": {
    dicas: [
      "Guarde o triângulo da Lei de Ohm (V = R · I) e preste muita atenção nas conversões de miliampère (mA) e quilo-ohm (kΩ).",
    ],
    ferramentas: [
      { nome: "Tinkercad Circuits (simulador de circuitos)", url: "https://www.tinkercad.com/circuits" },
    ],
  },
  "Programação Orientada a Objetos": {
    dicas: [
      "Entenda a diferença entre Classe (o molde) e Objeto (a instância criada a partir do molde) antes de avançar para Herança.",
    ],
    ferramentas: [
      { nome: "OneCompiler Java / Python POO", url: "https://onecompiler.com/java" },
    ],
  },
  "Projeto de Banco de Dados": {
    dicas: [
      "Nunca rode um comando UPDATE ou DELETE sem a cláusula WHERE — essa regra evita apagar todos os registros da tabela.",
    ],
    ferramentas: [
      { nome: "SQLite Online (praticar SQL direto no celular)", url: "https://sqliteonline.com/" },
    ],
  },
  "Sistemas Operacionais de Redes": {
    dicas: [
      "Pratique os comandos básicos de navegação e permissão no Linux (ls, cd, mkdir, chmod, chown) até ficarem naturais.",
    ],
    ferramentas: [
      { nome: "JSLinux – Terminal Linux no navegador", url: "https://bellard.org/jslinux/" },
    ],
  },
};

// ============================================================
//  4) QUIZZES (Diagnóstico rápido por disciplina e etapa)
//  Formato: ["Pergunta", ["A", "B", "C", "D"], indiceCorreta, "Explicação", etapa]
// ============================================================
const QUIZ = {
  "Introdução à Programação": [
    ["O que é um algoritmo?", ["Uma sequência finita de passos para resolver um problema", "Um tipo de computador", "Uma linguagem de programação", "Um site da internet"], 0, "Algoritmo é uma sequência finita e ordenada de passos, como uma receita.", 0],
    ["Qual destes é um exemplo de algoritmo?", ["Uma receita de bolo com passos numerados", "Uma foto da família", "O nome de um arquivo", "Uma senha"], 0, "Uma receita tem passos em ordem que levam a um resultado.", 0],
    ["Qual tipo de dado é o mais adequado para guardar “Maria”?", ["Inteiro", "Texto (string)", "Lógico", "Real"], 1, "Nomes são sequências de caracteres, ou seja, texto.", 1],
    ["Se idade = 15 e depois idade = idade + 1, qual é o valor final de idade?", ["14", "15", "16", "idade"], 2, "A variável recebe o valor antigo (15) mais 1.", 1],
    ["Se x = 5, qual é o resultado de x > 3?", ["Falso", "5", "Verdadeiro", "Erro"], 2, "5 é maior que 3, então a comparação resulta em verdadeiro.", 2],
    ["Em “se nota >= 7 então Aprovado senão Reprovado”, com nota = 6, o que aparece?", ["Aprovado", "Reprovado", "Nada", "Erro"], 1, "6 não é maior nem igual a 7, então executa o “senão”.", 2],
    ["Quantas vezes roda um laço que conta de 1 até 4?", ["3", "4", "5", "1"], 1, "Conta 1, 2, 3 e 4: são 4 repetições.", 3],
    ["Um laço “enquanto” em que a condição nunca fica falsa causa:", ["Laço infinito", "Resultado zero", "Erro de digitação", "Nada"], 0, "Sem algo que mude a condição, o laço nunca termina.", 3],
    ["Em um vetor com 5 posições (índice começa em 0), qual é o último índice?", ["5", "4", "0", "6"], 1, "Os índices vão de 0 a 4.", 4],
  ],
  "Autoria Web": [
    ["Qual tag HTML define o conteúdo visível principal da página?", ["<head>", "<body>", "<meta>", "<title>"], 1, "Tudo o que aparece na tela para o usuário fica dentro de <body>.", 0],
    ["Qual propriedade CSS altera a cor do texto de um elemento?", ["background-color", "font-style", "color", "text-align"], 2, "A propriedade 'color' define a cor da fonte; 'background-color' define o fundo.", 1],
    ["Qual propriedade CSS ativa o layout flexível em um container?", ["display: grid;", "display: flex;", "position: fixed;", "float: left;"], 1, "display: flex transforma o elemento em um container Flexbox.", 2],
    ["Qual deve ser o nome do arquivo HTML principal para publicar no GitHub Pages?", ["principal.html", "home.html", "index.html", "site.html"], 2, "Servidores web e o GitHub Pages procuram automaticamente por index.html na raiz.", 3],
  ],
  "Educação em Tecnologias Digitais": [
    ["Por que devemos evitar espaços e acentos em nomes de pastas de programação?", ["Porque o computador apaga o arquivo", "Para evitar erros de caminho em servidores e terminais", "Porque ocupa mais memória RAM", "Não faz diferença nenhuma"], 1, "Sistemas Linux e servidores web podem falhar ao interpretar espaços e caracteres especiais em URLs.", 1],
    ["O que significa autenticação em dois fatores (2FA)?", ["Ter duas contas diferentes", "Exigir uma segunda verificação além da senha para entrar", "Trocar a senha duas vezes por mês", "Usar dois navegadores"], 1, "Mesmo que alguém descubra sua senha, precisará do segundo código (app ou SMS) para acessar.", 0],
  ],
  "Eletricidade Instrumental": [
    ["De acordo com a Lei de Ohm, qual fórmula relaciona tensão (V), resistência (R) e corrente (I)?", ["V = R + I", "V = R · I", "V = R / I", "I = V · R"], 1, "A tensão elétrica (Volts) é igual ao produto da resistência (Ohms) pela corrente (Ampères).", 1],
    ["Em um circuito em série com duas lâmpadas, o que acontece se uma queimar?", ["A outra brilha mais forte", "Nada muda", "A outra apaga porque o caminho da corrente foi interrompido", "A tensão cai a zero na fonte"], 2, "No circuito em série há apenas um caminho para a corrente elétrica circular.", 2],
  ],
  "Matemática I (apoio)": [
    ["Dados A = {1, 2, 3} e B = {3, 4, 5}, qual é o conjunto interseção (A ∩ B)?", ["{1, 2, 3, 4, 5}", "{3}", "{1, 2}", "{4, 5}"], 1, "A interseção reúne apenas os elementos que pertencem simultaneamente aos dois conjuntos.", 0],
    ["Na função afim f(x) = 2x + 3, qual é o valor de f(5)?", ["10", "13", "8", "15"], 1, "Substituindo x por 5: f(5) = 2(5) + 3 = 10 + 3 = 13.", 1],
  ],
  "Programação Orientada a Objetos": [
    ["Na Orientação a Objetos, o que é uma Classe?", ["Um valor numérico", "Um molde/modelo que define atributos e métodos de um objeto", "Um laço de repetição", "Um arquivo CSS"], 1, "A classe funciona como a planta ou molde a partir do qual os objetos são instanciados.", 0],
    ["Qual pilar da POO permite que uma subclasse reaproveite atributos e métodos de uma superclasse?", ["Encapsulamento", "Herança", "Compilação", "Recursão"], 1, "A herança permite criar classes especializadas reaproveitando código da classe mãe.", 2],
  ],
  "Projeto de Banco de Dados": [
    ["Qual comando SQL é usado para consultar dados em uma tabela?", ["INSERT", "SELECT", "DROP", "ALTER"], 1, "O comando SELECT recupera registros de uma ou mais tabelas.", 2],
    ["Para que serve a Chave Primária (Primary Key) em uma tabela?", ["Deixar o banco mais bonito", "Identificar de forma única cada registro da tabela", "Apagar dados duplicados automaticamente", "Conectar à internet"], 1, "A chave primária garante que não existam dois registros idênticos sem identificação única.", 1],
  ],
  "Redes de Computadores": [
    ["Qual protocolo é responsável pelo endereçamento lógico e roteamento de pacotes na internet?", ["HTML", "IP", "USB", "JPEG"], 1, "O Protocolo de Internet (IP) identifica dispositivos na rede e encaminha os pacotes.", 1],
  ],
  "Programação para Internet": [
    ["Qual linguagem roda nativamente no navegador para dar interatividade às páginas web?", ["JavaScript", "C++", "SQL", "Pascal"], 0, "JavaScript é a linguagem padrão executada pelos navegadores para manipular o DOM e eventos.", 0],
  ],
  "Programação com Acesso a Banco de Dados": [
    ["O que significa a sigla CRUD em sistemas com banco de dados?", ["Create, Read, Update, Delete", "Connect, Run, Upload, Download", "Copy, Rename, Undo, Drop", "Code, Render, User, Data"], 0, "CRUD representa as 4 operações básicas: Criar, Ler, Atualizar e Deletar registros.", 1],
  ],
  "Sistemas Operacionais de Redes": [
    ["Qual comando no terminal Linux lista os arquivos e pastas do diretório atual?", ["cd", "ls", "rm", "pwd"], 1, "O comando 'ls' (list) exibe o conteúdo do diretório atual.", 0],
  ],
};
