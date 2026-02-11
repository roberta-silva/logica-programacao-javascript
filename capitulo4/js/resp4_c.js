const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = Number(form.inValor.value);

  // caso valor insuficiente
  if (valor < 1.0) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)");
    form.inValor.focus();
    return;
  }

  // declara variáveis
  let tempo;
  let troco;

  //variaveis
  if (valor >= 3.0) {
    tempo = 120;
    troco = valor - 3.0;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1.0;
  }

  //exibir respostas
  resp1.innerText = `Tempo: ${tempo} minutos.`;
  troco > 0.01
    ? (resp2.innerText = `Troco R$: ${troco.toFixed(2)}.`)
    : (resp2.innerText = "");
});
