//criar referencia ao form e aos elementos de resposta
const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

//criar um ouvinte de evento quando submit for clicado
form.addEventListener("submit", (e) => {
  //pegar dados
  const veiculo = form.inVeiculo.value;
  const preco = Number(form.inPreco.value);

  //calcular valores
  const entrada = preco * 0.5;
  const parcela = (preco - entrada) / 12;

  //exibir resultados
  resp1.innerText = `Promoção: ${veiculo}`;
  resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`;
  resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;

  e.preventDefault();
});
