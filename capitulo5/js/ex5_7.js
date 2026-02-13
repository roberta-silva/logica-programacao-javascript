const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(form.inNumero.value);
  let estrelas = "";

  for (let i = 1; i <= numero; i++) {
    if (i % 2 == 1) {
      estrelas = `${estrelas}*`;
    } else {
      estrelas = `${estrelas}-`;
    }
  }
  resp.innerText = estrelas;
});
