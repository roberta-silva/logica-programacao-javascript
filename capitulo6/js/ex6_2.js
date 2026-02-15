const form = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDicas");

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);

  if (numero == sorteado) {
    respDica.innerText = `Parabéns! Número sorteado: ${sorteado}`;
    form.btnSubmit.disabled = true;
    form.btnNovo.className = "exibe";
  } else {
    if (erros.includes(numero)) {
      alert(`Você já apostou o número ${numero}. Tente outro...`);
    } else {
      erros.push(numero);
      const numErros = erros.length;
      const numChances = chances - numErros;

      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;

      if (numChances == 0) {
        alert("Suas chances acabaram...");
        form.btnSubmit.disabled = true;
        form.btnNovo.className = "exibe";
        respDica.innerText = `Game Over!! Número sorteado: ${sorteado}`;
      } else {
        const dica = numero < sorteado ? "maior" : "menor";
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
  }
  form.inNumero.value = "";
  form.inNumero.focus();
});

//recarrega a pagina ao clina em 'jogar novamente'
form.btnNovo.addEventListener("click", () => {
  location.reload();
});
