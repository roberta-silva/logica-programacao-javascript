const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

const numeros = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);

  if (numeros.includes(numero)) {
    alert(`${numero} já foi adicionado.`);
    form.reset();
    inNumero.focus();
    return;
  } else {
    numeros.push(numero);
    form.reset();
    inNumero.focus();
    resp1.innerText = `Números:  ${numeros.join(", ")}.`;
  }
});

form.inVerificar.addEventListener("click", () => {
  if(numeros.length == 0) {
    alert("Não há números na lista...")
    inNum.focus()
    return
  }
  
  const ordem = numeros.slice().sort((a, b) => a - b);

  for (let i = 0; i < ordem.length; i++) {
    if (ordem[i] !== numeros[i]) {
      resp2.innerText = "Atenção... Números NÃO estão em ordem crescente!!";
    } else {
      resp2.innerText = "Números estão em ordem crescente!!";
    }
  }
});
