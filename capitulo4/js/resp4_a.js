// ref elementos html
const form = document.querySelector("form");
const resp = document.querySelector("h3");

//evento submit
form.addEventListener("submit", (e) => {
  //previnir o padrao (envio do form - recarregar a pagina)
  e.preventDefault();

  //pegar valores
  const numero = Number(form.inNumero.value);

  //declarar variavel
  let resposta;

  //par ou ímpar
  numero % 2 === 0 ? (resposta = "par") : (resposta = "ímpar");

  //exibir resposta
  resp.innerText = `${numero} é ${resposta}`;
});
