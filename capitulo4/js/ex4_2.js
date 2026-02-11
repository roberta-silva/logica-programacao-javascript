//criar referencia aos elementos html
const form = document.querySelector("form");
const resp = document.querySelector("h3");

//ouvinte de evento ao clique em submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //obter valores do formulario
  const nome = form.inNome.value;
  const masculino = form.inMasculino.checked;
  const altura = Number(form.inAltura.value);

  //estrutura condicional if/else
  // let peso;
  // if (masculino) {
  //   peso = 22 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
  // } else {
  //   peso = 21 * Math.pow(altura, 2);
  // }

  //estrutura condicional ternario
  const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

  //exibir resposta
  resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`;
});

//limpar conteudo do h3 ao clicar em reset
form.addEventListener("reset", (e) => {
  resp.innerText = "";
});
