const form = document.querySelector("form");
const resp = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fruta = form.inFruta.value;
  const numero = Number(form.inNumero.value);

  let frutas = "";

  for (let i = 1; i < numero; i++) {
    frutas = `${frutas} ${fruta} *`;
  }
  frutas = `${frutas} ${fruta}`;

  resp.innerText = frutas;
});
