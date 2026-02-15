const form = document.querySelector("form");
const resp = document.querySelector("pre");

const candidatos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const candidato = form.inCandidato.value;
  const acertos = Number(form.inAcertos.value);

  candidatos.push({ candidato, acertos });
  form.reset();
  inCandidato.focus();
  form.btnListar.dispatchEvent(new Event("click"));
});

btnListar.addEventListener("click", () => {
  lista = "";

  if (candidatos.length == 0) {
    alert("Nenhum candidato encontrado.");
    inCandidato.focus();
    return;
  } else {
    for (const item of candidatos) {
      const { candidato, acertos } = item;

      lista += `${candidato} - ${acertos} acertos\n`;
    }
  }
  resp.innerText = lista;
});

//aprovados
form.btnAprovados.addEventListener("click", () => {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista");
    return;
  }

  const qtdeAcertos = Number(prompt("Número de Acertos para Aprovação? "));

  if (qtdeAcertos == 0 || isNaN(qtdeAcertos)) {
    alert("Número inválido");
    return;
  }

  const copia = candidatos.slice();
  copia.sort((a, b) => {
    a.acertos - b.acertos;
  });
  copia.reverse();

  let aprovados = "";

  for (const candidato of copia) {
    if (candidato.acertos >= qtdeAcertos) {
      aprovados +=
        candidato.candidato + " - " + candidato.acertos + " acertos\n";
    }
  }

  if (aprovados == "") {
    resp.innerText = "Não há candidatos aprovados...";
  } else {
    resp.innerText = aprovados;
  }
});
