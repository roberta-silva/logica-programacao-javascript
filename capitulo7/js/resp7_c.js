const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = form.inData.value; // 2026-02-18
  const valor = Number(form.inValor.value); 

  const dataLimite = new Date();

  const partes = data.split("-");
  console.log(partes)
 
  dataLimite.setDate(Number(partes[2]));
  dataLimite.setMonth(Number(partes[1]) - 1);
  dataLimite.setFullYear(Number(partes[0]));

  const dia = dataLimite.getDate(); 

  dataLimite.setDate(dia + 90); 
  const mes = dataLimite.getMonth() + 1;
  const ano = dataLimite.getFullYear();

  const comDesconto = valor * 0.8;

  resp1.innerText =
    "Data Limite para Pagto com Desconto: " +
    (dia < 10 ? "0" + dia : dia) +
    "/" +
    (mes < 10 ? "0" + mes : mes) +
    "/" +
    ano;
  resp2.innerText = "Valor com Desconto R$: " + comDesconto.toFixed(2);
});
