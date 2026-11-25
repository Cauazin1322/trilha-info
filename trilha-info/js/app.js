// LÓGICA DO SITE TRILHA INFO (progresso, ofensiva, busca, tema, janelas e quiz)
const DISCIPLINAS = YEARS.flatMap((ano) =>
  ano.disciplinas.map((disciplina) => ({
    ano: ano.n,
    id: disciplina.nome,
    nome: disciplina.nome,
    etapas: disciplina.etapas,
  })),
);

let S = {
  done: {},
  quiz: {},
  year: 1,
  theme: "light",
  streak: {
    last: "",
    count: 0,
    best: 0,
    days: [],
  },
};

const $ = (id) => document.getElementById(id);

const ds = (t) => {
  const z = new Date(t);
  return (
    z.getFullYear() +
    "-" +
    String(z.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(z.getDate()).padStart(2, "0")
  );
};

const today = () => ds(Date.now());
const yest = () => ds(Date.now() - 864e5);

const sc = () => {
  const k = S.streak;
  return k.last === today() || k.last === yest() ? k.count : 0;
};

try {
  const saved = JSON.parse(localStorage.getItem("trilha") || "{}");
  S = Object.assign(S, saved);
  if (saved.streak) {
    S.streak = Object.assign(S.streak, saved.streak);
  }
} catch (e) {}

const save = () => {
  try {
    localStorage.setItem("trilha", JSON.stringify(S));
  } catch (e) {}
};

// Tema claro / escuro
function applyTheme() {
  const isDark = S.theme === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  const btn = $("theme-btn");
  if (btn) {
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.title = isDark ? "Mudar para tema claro" : "Mudar para tema escuro";
  }
}

$("theme-btn").onclick = () => {
  S.theme = S.theme === "dark" ? "light" : "dark";
  save();
  applyTheme();
};

function ping() {
  const k = S.streak;
  const t = today();

  if (k.last === t) {
    return null;
  }

  k.count = k.last === yest() ? k.count + 1 : 1;
  k.last = t;
  k.best = Math.max(k.best || 0, k.count);
  k.days = (k.days || []).concat(t).slice(-60);
  save();

  return (
    "Ofensiva de " +
    k.count +
    (k.count > 1 ? " dias!" : " dia! Volte amanhã.")
  );
}

function fire() {
  const n = sc();
  const k = S.streak;
  const on = k.last === today();

  $("fire").textContent = n + (n === 1 ? " dia" : " dias");
  $("fire").title = "Ofensiva: " + n + " dia(s) seguidos";

  let w = "";
  for (let i = 6; i >= 0; i--) {
    const t = Date.now() - i * 864e5;
    const d = ds(t);
    const active = (k.days || []).includes(d);

    w += `<div class="dy ${active ? "on" : ""} ${i === 0 ? "td" : ""}">
      <i>${active ? "✓" : ""}</i>${"DSTQQSS"[new Date(t).getDay()]}
    </div>`;
  }

  $("streak").innerHTML = `
    <span class="big" aria-hidden="true">${n}</span>
    <div>
      <p>
        <b>${n ? "Ofensiva de " + n + (n > 1 ? " dias" : " dia") : "Comece sua ofensiva"}</b>
      </p>
      <small>
        ${
          on
            ? "Você já estudou hoje. Volte amanhã!"
            : n
              ? "Estude hoje para não perder a sequência."
              : "Conclua uma etapa hoje para acender a chama."
        }${k.best > 1 ? " Recorde: " + k.best + " dias." : ""}
      </small>
    </div>
    <div class="days" aria-label="Últimos 7 dias">${w}</div>
  `;
}

const pr = (d) => {
  let n = 0;
  d.etapas.forEach((_, i) => {
    if (S.done[d.id + ":e" + i]) {
      n++;
    }
  });
  return n / d.etapas.length;
};

const yp = (y) => {
  const l = DISCIPLINAS.filter((d) => d.ano === y);
  return l.reduce((a, d) => a + pr(d), 0) / l.length;
};

function hasContent(d) {
  const pl = PLAYLISTS[d.id] && parseYT(PLAYLISTS[d.id].playlist);
  const ex = Object.values(EXERCICIOS[d.id] || {}).some((arr) =>
    arr.some((m) => m.arquivo || m.url),
  );
  const qz = QUIZ[d.id] && QUIZ[d.id].length > 0;
  return Boolean(pl || ex || qz);
}

function toast(t) {
  const e = $("toast");
  e.textContent = t;
  e.classList.add("on");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => e.classList.remove("on"), 1800);
}

function head() {
  const xp =
    Object.keys(S.done).length * 10 +
    Object.values(S.quiz).reduce((a, b) => a + Math.round(b * 20), 0);

  $("xp").textContent = xp + " XP";

  const tot = (yp(1) + yp(2) + yp(3) + yp(4)) / 4;
  $("gbar").style.width = tot * 100 + "%";
  $("gpct").textContent = Math.round(tot * 100) + "%";
  $("dpath").setAttribute("stroke-dasharray", tot * 100 + " 100");
  fire();
}

function nodes() {
  const P = [
    [70, 170],
    [300, 70],
    [520, 170],
    [730, 70],
  ];

  $("nodes").innerHTML =
    P.map(
      (p, i) => `
        <g
          class="node ${S.year === i + 1 ? "on" : ""}"
          tabindex="0"
          role="button"
          aria-label="${i + 1}º ano, ${Math.round(yp(i + 1) * 100)}% concluído"
          data-y="${i + 1}"
        >
          <circle class="b" cx="${p[0]}" cy="${p[1]}" r="38" />
          <text class="n" x="${p[0]}" y="${p[1] + 8}">${i + 1}º</text>
          <text class="l" x="${p[0]}" y="${p[1] + 64}">${YEARS[i].t}</text>
        </g>
      `,
    ).join("") +
    `<path class="flag" d="M722 28v-28l30 10-30 10z" transform="translate(0 -4)" />`;

  document.querySelectorAll(".node").forEach((n) => {
    const go = () => {
      S.year = +n.dataset.y;
      save();
      render();
      $("tabs").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    n.onclick = go;
    n.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    };
  });
}

function renderPesquisaBox() {
  const box = $("pesquisa-box");
  if (!box || typeof CONFIG_PESQUISA === "undefined") return;

  const temLink = Boolean(CONFIG_PESQUISA.linkFormulario && CONFIG_PESQUISA.linkFormulario.trim());
  box.innerHTML = `
    <b>${CONFIG_PESQUISA.titulo}:</b>
    <p style="margin: 6px 0 10px">${CONFIG_PESQUISA.descricao}</p>
    <div class="vrow">
      ${
        temLink
          ? `<a class="btn" href="${CONFIG_PESQUISA.linkFormulario}" target="_blank" rel="noopener">${CONFIG_PESQUISA.textoBotao}</a>`
          : `<button class="btn" type="button" id="btn-forms-demo">${CONFIG_PESQUISA.textoBotao}</button>
             <small><i>(Cole o link do Google Forms em js/dados.js → CONFIG_PESQUISA)</i></small>`
      }
    </div>
  `;

  const demoBtn = $("btn-forms-demo");
  if (demoBtn) {
    demoBtn.onclick = () => {
      toast("Cole o link do Google Forms em js/dados.js!");
    };
  }
}

function render() {
  const termo = ($("search").value || "").trim().toLowerCase();
  const somenteProntos = $("only-ready").checked;

  $("tabs").innerHTML = YEARS.map(
    (y) =>
      `<button class="tab" role="tab" aria-selected="${!termo && S.year === y.n}" data-y="${y.n}">${y.n}º ano</button>`,
  ).join("");

  document.querySelectorAll("#tabs .tab").forEach((b) => {
    b.onclick = () => {
      $("search").value = "";
      S.year = +b.dataset.y;
      save();
      render();
    };
  });

  let lista;
  if (termo) {
    $("yt").textContent = `Resultados da busca por "${$("search").value.trim()}"`;
    $("yd").textContent = "Mostrando disciplinas e etapas correspondentes em todos os anos.";
    lista = DISCIPLINAS.filter(
      (d) =>
        d.nome.toLowerCase().includes(termo) ||
        d.etapas.some((et) => et.toLowerCase().includes(termo)),
    );
  } else {
    const y = YEARS[S.year - 1];
    $("yt").textContent = `${y.n}º ano — ${y.t}`;
    $("yd").textContent = y.d;
    lista = DISCIPLINAS.filter((d) => d.ano === S.year);
  }

  if (somenteProntos) {
    lista = lista.filter(hasContent);
  }

  if (!lista.length) {
    $("grid").innerHTML = `
      <div class="step" style="grid-column: 1 / -1">
        <b>Nenhuma disciplina encontrada com esse filtro.</b>
        <p style="margin: 6px 0 0; color: var(--mut)">
          Limpe a busca ou desmarque o filtro acima para visualizar todas as matérias.
        </p>
      </div>
    `;
  } else {
    $("grid").innerHTML = lista
      .map((d) => {
        const pronta = hasContent(d);
        return `
          <button class="card ${/apoio/.test(d.nome) ? "ap" : ""}" data-i="${DISCIPLINAS.indexOf(d)}">
            <div class="card-top">
              ${
                pronta
                  ? `<span class="tag-ready">✓ Conteúdo ativo</span>`
                  : `<span class="tag-ready" style="opacity:0.65">Em estruturação</span>`
              }
            </div>
            <h3>${d.nome}</h3>
            <small>${termo ? d.ano + "º ano • " : ""}${d.etapas.length} etapas</small>
            <div class="bar">
              <span style="width: ${pr(d) * 100}%"></span>
            </div>
            <span class="pill">${Math.round(pr(d) * 100)}% concluído</span>
          </button>
        `;
      })
      .join("");
  }

  document.querySelectorAll(".card").forEach((c) => {
    c.onclick = () => open(+c.dataset.i);
  });

  nodes();
  head();
}

let cur = null;
let tab = "aulas";

function open(i) {
  cur = DISCIPLINAS[i];
  tab = "aulas";
  $("dyear").textContent = `${cur.ano}º Ano • Técnico em Informática (IFRN)`;
  $("dt").textContent = cur.nome;
  $("dtabs").innerHTML = [
    ["aulas", "Aulas e exercícios"],
    ["quiz", "Quiz"],
    ["dicas", "Dicas & Prática Mobile"],
  ]
    .map(
      (t) =>
        `<button class="tab" role="tab" data-t="${t[0]}" aria-selected="${t[0] === tab}">${t[1]}</button>`,
    )
    .join("");

  document.querySelectorAll("#dtabs .tab").forEach((b) => {
    b.onclick = () => {
      tab = b.dataset.t;
      document
        .querySelectorAll("#dtabs .tab")
        .forEach((x) => x.setAttribute("aria-selected", x === b));
      body();
    };
  });

  body();
  $("dlg").showModal();
}

function dbar() {
  $("dbar").style.width = pr(cur) * 100 + "%";
}

function body() {
  const c = $("dc");
  const d = cur;
  dbar();

  if (tab === "aulas") {
    c.innerHTML =
      playlistBlock(d) +
      d.etapas
        .map(
          (s, i) => `
            <div class="step">
              <h3>Etapa ${i + 1}: ${s}</h3>
              ${materiaisBlock(d, i)}
              <label class="chk">
                <input
                  type="checkbox"
                  data-k="${d.id}:e${i}"
                  ${S.done[d.id + ":e" + i] ? "checked" : ""}
                >
                Concluí esta etapa (+10 XP)
              </label>
            </div>
          `,
        )
        .join("");

    c.querySelectorAll("[data-pl]").forEach((b) => {
      b.onclick = () => {
        $("vpl").innerHTML = playerHTML(PLAYLISTS[d.id]);
        b.remove();
      };
    });
  }

  if (tab === "quiz") {
    const q = QUIZ[d.id];

    if (!q || !q.length) {
      c.innerHTML = `
        <div class="step">
          <h3>Quiz em preparação</h3>
          <p style="margin: 6px 0 0; color: var(--mut)">
            O quiz diagnóstico desta disciplina será adicionado nas próximas atualizações
            colaborativas pelos estudantes veteranos.
          </p>
        </div>
      `;
    } else {
      quizMenu(q);
    }
  }

  if (tab === "dicas") {
    const info = DICAS_E_MOBILE[d.id];
    const dicas = (info && info.dicas) || [
      "Revise os conceitos-chave antes de partir para os exercícios práticos.",
      "Anote suas dúvidas durante a aula para levar aos horários de monitoria ou atendimento docente no IFRN.",
    ];
    const ferramentas = (info && info.ferramentas) || [
      { nome: "OneCompiler – Editor de código online para celular", url: "https://onecompiler.com/" },
    ];

    c.innerHTML = `
      <div class="step">
        <h3>Dicas de Estudantes Veteranos</h3>
        <ul class="tip-list">
          ${dicas.map((tip) => `<li>${tip}</li>`).join("")}
        </ul>
      </div>
      <div class="step">
        <h3>Praticar no Celular (Sem precisar instalar nada)</h3>
        <p style="margin: 4px 0 10px; color: var(--mut); font-size: 0.92rem">
          Não tem notebook em casa? Use estas ferramentas gratuitas direto pelo navegador do smartphone:
        </p>
        <div class="vrow">
          ${ferramentas
            .map(
              (f) =>
                `<a class="btn o" href="${f.url}" target="_blank" rel="noopener">${f.nome}</a>`,
            )
            .join("")}
        </div>
      </div>
    `;
  }

  c.querySelectorAll("input[data-k]").forEach((x) => {
    x.onchange = () => {
      if (x.checked) {
        S.done[x.dataset.k] = 1;
        toast(ping() || "+10 XP");
      } else {
        delete S.done[x.dataset.k];
      }

      save();
      dbar();
      head();
      render2();
    };
  });
}

function render2() {
  document.querySelectorAll(".card").forEach((c) => {
    const d = DISCIPLINAS[+c.dataset.i];
    if (!d) return;
    c.querySelector(".bar span").style.width = pr(d) * 100 + "%";
    c.querySelector(".pill").textContent =
      Math.round(pr(d) * 100) + "% concluído";
  });

  nodes();
}

// ===== Vídeos e Materiais =====
function materiaisBlock(d, i) {
  const lista = ((EXERCICIOS[d.id] || {})[i] || []).filter(
    (m) => m.arquivo || m.url,
  );

  if (!lista.length) {
    return `<div class="vrow"><small>Exercícios e resumos em breve.</small></div>`;
  }

  return `
    <div class="vrow">
      ${lista
        .map((m) => {
          const botoes = [];
          if (m.arquivo) {
            botoes.push(
              `<a class="btn o" href="${m.arquivo}" target="_blank" rel="noopener">PDF Offline: ${m.titulo}</a>`,
            );
          }
          if (m.url) {
            botoes.push(
              `<a class="btn o" href="${m.url}" target="_blank" rel="noopener">Drive: ${m.titulo}</a>`,
            );
          }
          return botoes.join("");
        })
        .join("")}
    </div>
  `;
}

function playlistBlock(d) {
  const p = PLAYLISTS[d.id];

  if (!p || !parseYT(p.playlist)) {
    return `
      <div class="step">
        <h3>Playlist da disciplina</h3>
        <small>Em breve: as videoaulas curadas desta matéria vão tocar aqui dentro do site.</small>
      </div>
    `;
  }

  const ehPlaylist = !!parseYT(p.playlist).playlist;

  return `
    <div class="step">
      <h3>${ehPlaylist ? "Playlist da disciplina" : "Videoaula da disciplina"}</h3>
      <div class="vrow">
        <button class="btn" data-pl="1">${ehPlaylist ? "Assistir playlist completa" : "Assistir videoaula"}</button>
        ${p.canal ? `<small>Canal: <b>${p.canal}</b></small>` : ""}
      </div>
      <div id="vpl"></div>
    </div>
  `;
}

// Aceita link completo do YouTube (playlist ou vídeo único) OU só o código.
function parseYT(valor) {
  const t = String(valor || "").trim();
  const lista = t.match(/[?&]list=([\w-]+)/);
  if (lista) return { playlist: lista[1] };
  const video = t.match(
    /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/,
  );
  if (video) return { id: video[1] };
  if (/^[\w-]{11}$/.test(t)) return { id: t };
  if (/^[\w-]{12,}$/.test(t)) return { playlist: t };
  return null;
}

function playerHTML(v) {
  const yt = parseYT(v.playlist || v.id);

  if (!yt) {
    return `<div class="vid">Link inválido. Confira o campo em js/dados.js.</div>`;
  }

  const link0 = yt.playlist
    ? `https://www.youtube.com/playlist?list=${yt.playlist}`
    : `https://www.youtube.com/watch?v=${yt.id}`;

  // Abrindo o index.html direto via file://, o YouTube bloqueia embed (erro 153).
  if (location.protocol === "file:") {
    return `
      <div class="expl">
        <b>Aviso de execução local (file://):</b> para o player tocar embutido aqui,
        abra pelo <b>Live Server</b> do VS Code ou pelo link no <b>GitHub Pages</b>.
        <br><a class="vlink" href="${link0}" target="_blank" rel="noopener">Abrir vídeo direto no YouTube</a>
      </div>
    `;
  }

  const base = "https://www.youtube-nocookie.com/embed/";
  const extra = "autoplay=1&rel=0";
  const src = yt.playlist
    ? `${base}videoseries?list=${yt.playlist}&${extra}`
    : `${base}${yt.id}?${extra}${v.inicio ? "&start=" + v.inicio : ""}`;

  return `
    <div class="vid">
      <iframe
        src="${src}"
        title="${v.titulo || "Videoaula"}"
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <a class="vlink" href="${link0}" target="_blank" rel="noopener">Abrir no YouTube</a>
    <small class="vlink"> • Se o canal bloquear incorporação externa, clique em "Abrir no YouTube".</small>
  `;
}

// ===== Quiz =====
function quizMenu(q) {
  const c = $("dc");
  const d = cur;
  const opcoes = [{ key: d.id, nome: "Todas as perguntas da disciplina", lista: q }];

  d.etapas.forEach((s, i) => {
    const lista = q.filter((x) => x[4] === i);

    if (lista.length) {
      opcoes.push({
        key: d.id + ":" + i,
        nome: "Etapa " + (i + 1) + ": " + s,
        lista,
      });
    }
  });

  if (opcoes.length === 1) {
    quiz(q, d.id);
    return;
  }

  c.innerHTML = opcoes
    .map((o, n) => {
      const melhor =
        S.quiz[o.key] !== undefined
          ? " • melhor: " + Math.round(S.quiz[o.key] * 100) + "%"
          : "";

      return `
        <button class="opt" data-n="${n}">
          <b>${o.nome}</b> <small>(${o.lista.length} perguntas${melhor})</small>
        </button>
      `;
    })
    .join("");

  c.querySelectorAll("[data-n]").forEach((b) => {
    b.onclick = () => {
      const o = opcoes[+b.dataset.n];
      quiz(o.lista, o.key);
    };
  });
}

function quiz(q, key) {
  let i = 0;
  let ok = 0;
  const c = $("dc");

  (function show() {
    if (i >= q.length) {
      S.quiz[key] = Math.max(S.quiz[key] || 0, ok / q.length);
      const m = ping();
      save();
      head();

      if (m) {
        toast(m);
      }

      c.innerHTML = `
        <div class="q">
          <h3>Você acertou ${ok} de ${q.length}</h3>
          <p>
            ${ok === q.length ? "Mandou bem! Etapa dominada." : "Revise as etapas e tente de novo."}
          </p>
          <div class="row">
            <button class="btn" id="rt">Refazer quiz</button>
            <button class="btn o" id="vm">Voltar ao menu</button>
          </div>
        </div>
      `;
      $("rt").onclick = () => quiz(q, key);
      $("vm").onclick = () => body();
      return;
    }

    const x = q[i];
    c.innerHTML = `
      <div class="q">
        <small>Pergunta ${i + 1} de ${q.length}</small>
        <h3 style="margin-top: 6px">${x[0]}</h3>
        ${x[1].map((o, j) => `<button class="opt" data-j="${j}">${o}</button>`).join("")}
      </div>
    `;

    c.querySelectorAll(".opt").forEach((b) => {
      b.onclick = () => {
        const j = +b.dataset.j;
        const opts = c.querySelectorAll(".opt");
        opts.forEach((o) => (o.disabled = true));
        opts[x[2]].classList.add("ok");

        if (j === x[2]) {
          ok++;
          toast("Correto! +XP");
        } else {
          b.classList.add("no");
        }

        c.querySelector(".q").insertAdjacentHTML(
          "beforeend",
          `${x[3] ? `<p class="expl"><b>Por quê?</b> ${x[3]}</p>` : ""}
           <button class="btn" id="nx">${i + 1 < q.length ? "Próxima pergunta" : "Ver resultado"}</button>`,
        );
        $("nx").onclick = () => {
          i++;
          show();
        };
      };
    });
  })();
}

// Eventos globais
$("cl").onclick = () => $("dlg").close();

$("dlg").addEventListener("click", (e) => {
  if (e.target === $("dlg")) {
    $("dlg").close();
  }
});

$("search").oninput = render;
$("only-ready").onchange = render;

$("reset-btn").onclick = () => {
  if (confirm("Deseja zerar todo o XP, ofensiva e etapas marcadas neste aparelho?")) {
    const currentTheme = S.theme;
    S = {
      done: {},
      quiz: {},
      year: 1,
      theme: currentTheme,
      streak: { last: "", count: 0, best: 0, days: [] },
    };
    save();
    render();
    toast("Progresso zerado!");
  }
};

applyTheme();
renderPesquisaBox();
render();
