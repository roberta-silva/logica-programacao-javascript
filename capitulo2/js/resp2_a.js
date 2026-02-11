//referencia aos elemntos html
const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  //pegar valores
  const medicamento = form.inMedicamento.value;
  const preco = form.inPreco.value;

  //calcular valores
  const promo = Math.floor(Number(preco * 2));

  //exibir respostas
  resp1.innerText = `Promoção de ${medicamento}`;
  resp2.innerText = `Leve 2 por apenas R$ ${promo.toFixed(2)}`;

  e.preventDefault();
});
