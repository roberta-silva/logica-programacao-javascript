const form = document.querySelector("form");
const convenio = document.querySelector("#pConvenio");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const preco = Number(form.inValor.value);
  let desconto;

  if (form.rbSim.checked) {
    if (form.selConvenio.value == "amigo") {
      desconto = calcularDesc(preco, 20);
    } else {
      desconto = calcularDesc(preco, 50);
    }
  } else {
    desconto = calcularDesc(preco, 10);
  }

  resp1.innerText = `Desconto R$: ${desconto.toFixed(2)}`;
  resp2.innerText = `A Pagar R$: ${(preco - desconto).toFixed(2)}`;
});

const calcularDesc = (preco, txDesconto) => preco * (txDesconto / 100);

//alterar class radio buttons
form.rbSim.addEventListener("change", () => {
  convenio.className = "exibir"; 
});
form.rbNao.addEventListener("change", () => {
  convenio.className = "ocultar";
});
