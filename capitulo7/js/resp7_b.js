const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const frase = form.inFrase.value.toUpperCase();

  //retirar espacos em branco da frase
  const frase2 = frase.replace(/ /g, "");

  const fraseReverse = frase2.split("").reverse().join("");
  let resposta = "";

  if (frase2 === fraseReverse) {
    resposta += frase + " é um palíndromo.";
  } else {
    resposta += frase + " não é um palíndromo.";
  }

  resp.innerText = resposta;
});
