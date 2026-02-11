const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(form.inLadoA.value);
  const ladoB = Number(form.inLadoB.value);
  const ladoC = Number(form.inLadoC.value);

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    resp1.innerText = "Lados não podem formar um triângulo";
  } else {
    resp1.innerText = "Lados podem formar um triângulo";
    if (ladoA == ladoB && ladoA == ladoC) {
      resp2.innerText = "Tipo: Equilátero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      resp2.innerText = "Tipo: Isósceles";
    } else {
      resp2.innerText = "Tipo: Escaleno";
    }
  }
});
