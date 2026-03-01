const form = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada;
let dicaSorteada;

window.addEventListener("load", () => {
  if (!localStorage.getItem("jogoPalavra")) {
    alert("Cadastre palavras para jogar");
    form.inLetra.disabled = true;
    form.btnJogar.disabled = true;
    form.btnVerDica.disabled = true;
  }
  const palavras = localStorage.getItem("jogoPalavra").split(";");
  const dicas = localStorage.getItem("jogoDica").split(";");

  const tam = palavras.length;
  const numAleatorio = Math.floor(Math.random() * tam);

  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];

  let novaPalavra = "";

  for (const letra of palavraSorteada) {
    if (letra == palavraSorteada.charAt(0)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {
      novaPalavra += "_";
    }
  }
  respPalavra.innerText = novaPalavra;
});

//ver dica
form.btnVerDica.addEventListener("click", () => {
  if (respErros.innerText.includes("*")) {
    alert("Você já solicitou a dica.");
    form.inLetra.focus();
    return;
  }

  respDica.innerText = " * " + dicaSorteada.toUpperCase();
  respErros.innerText += "*";

  const chances = Number(respChances.innerText) - 1;
  respChances.innerText = chances;

  trocarStatus(chances);
  verificarFim();
  form.inLetra.focus();
});

//trocar imagem de status do jogador
const trocarStatus = (num) => {
  if (num > 0) imgStatus.src = `./img/status${num}.jpg`;
};

//botao jogar
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const letra = form.inLetra.value.toUpperCase();
  let erros = respErros.innerText;
  let palavra = respPalavra.innerText;

  if (erros.includes(letra)) {
    alert("Você ja tentou essa letra.");
    form.inLetra.focus();
    return;
  }

  if (palavraSorteada.includes(letra)) {
    let novaPalavra = "";
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (palavraSorteada.charAt(i) == letra) {
        novaPalavra += letra;
      } else {
        novaPalavra += palavra.charAt(i);
      }
    }
    respPalavra.innerText = novaPalavra;
  } else {
    respErros.innerText += letra;
    const chances = Number(respChances.innerText) - 1;
    respChances.innerText = chances;

    trocarStatus(chances);
  }
  verificarFim();
  form.inLetra.value = "";
  form.inLetra.focus();
});

//verificar fimde jogo
const verificarFim = () => {
  const chances = Number(respChances.innerText);

  if (chances == 0) {
    respMensagemFinal.className = "display-3 text-danger";
    respMensagemFinal.innerText = `Ah... era ${palavraSorteada}. Você perdeu!!`;
    concluirJogo();
  } else if (respPalavra.innerText == palavraSorteada) {
    respMensagemFinal.className = "display-3 text-primary";
    respMensagemFinal.innerText = "Parabéns!! Você ganhou!";
    trocarStatus(4);
    concluirJogo();
  }
};

//modifica o texto de dica e desabilita os botoes de jogar
const concluirJogo = () => {
  respDica.innerText = '* Clique em "Iniciar Jogo" para jogar novamente.';
  form.inLetra.disabled = true;
  form.btnJogar.disabled = true;
  form.btnVerDica.disabled = true;
};
