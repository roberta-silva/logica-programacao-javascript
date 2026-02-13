const form = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "";
let numContas = 0;
let vlTotal = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //pegar o valor digitado no campo
  const descricao = form.inDescricao.value;
  const valor = Number(form.inValor.value);

  //incrementar o contador de contas
  numContas++;

  //somar o valor digitado ao total acumulado
  vlTotal = vlTotal + valor;

  //atualizar o texto acumulado com descrição e total
  resposta = `${resposta}${descricao} - R$: ${valor.toFixed(2)}\n`;
  resp1.innerText = `${resposta} ----------------------`;
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${vlTotal.toFixed(2)}`;

  //limpar os campos do form
  form.inDescricao.value = "";
  form.inValor.value = "";
  form.inDescricao.focus();
});
