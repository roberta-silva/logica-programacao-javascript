//criar referencia ao form e ao h3
const form = document.querySelector("form");
const resp = document.querySelector("h3");

//criar um ouvinte ao evento submit
form.addEventListener("submit", (e) => {
  //obtem conteudo dos campos
  const valorKG = Number(form.inQuilo.value);
  const consumo = Number(form.inConsumo.value);

  //calcular preco
  const valorAPagar = (valorKG / 1000) * consumo;

  //exibir resultado
  resp.innerText = `Valor a pagar R$ ${valorAPagar.toFixed(2)}`;

  e.preventDefault();
});
