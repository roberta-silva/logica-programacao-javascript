//ref elementos html
const form = document.querySelector("form");
const resp = document.querySelector("h3");

//evento submit
form.addEventListener("submit", (e) => {
  //previnir padrao
  e.preventDefault();

  //pegar valores do form
  const vPermitida = Number(form.inVelPermitida.value);
  const vCondutor = Number(form.inVelCondutor.value);

  let situacao;
  const multaLeve = vPermitida + vPermitida * 0.2;

  //verificar velocidade
  if (vCondutor <= vPermitida) {
    situacao = "Sem multa";
  } else if (vCondutor > vPermitida && vCondutor <= multaLeve) {
    situacao = "Multa leve";
  } else {
    situacao = "Multa grave";
  }

  //exibir resposta
  resp.innerText = `Situação: ${situacao}`;
});
