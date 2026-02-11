//ref elementos html
const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//ouvinte ao submit
form.addEventListener("submit", (e) => {
  //pegar valores
  const produto = form.inProduto.value;
  const preco = Number(form.inPreco.value);

  //calcular
  const terceiro = preco - preco * 0.5;
  const total = preco * 2 + terceiro;

  //exibir resposta
  resp1.innerText = `${produto} - Promoção Leve 3 por R$ ${total.toFixed(2)}`;
  resp2.innerText = `O 3° produto custa apenas R$: ${terceiro.toFixed(2)}`;

  e.preventDefault();
});
