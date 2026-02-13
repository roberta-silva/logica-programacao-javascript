const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);

  let temDivisor = 0;

  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      temDivisor = 1;
      break
    }
  }
  if (numero> 1 && !temDivisor) {
    resp.innerText = `${numero} é primo.`;
  } else {
    resp.innerText = `${numero} não é primo.`;
  }
});
