const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const funcionario = form.inFuncionario.value;

  //dividir os nome em itens de um array
  const partes = funcionario.split(" ");

  let email = ""; //para concatenar
  const tam = partes.length; //obtem numero de itend do array em partes

  for (let i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0); //obtém a letra inicial de cada item
  }
  email += partes[tam - 1] + "@empresa.com.br";
  resp.innerText = `E-mail: ${email.toLowerCase()}`;
});
