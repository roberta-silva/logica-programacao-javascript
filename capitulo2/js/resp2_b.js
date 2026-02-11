//ref elementos html
const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  //pegar valores
  const preco = Number(form.inPreco.value);
  const tempo = Number(form.inTempo.value);

  //calcular
  const total = Math.ceil(tempo / 15) * preco;

  //exibir resposta
  resp.innerText = `Valor a pagar R$ ${total.toFixed(2)}`;

  e.preventDefault();
});
