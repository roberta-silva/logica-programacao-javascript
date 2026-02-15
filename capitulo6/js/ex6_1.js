const form = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

//declara array global
const pacientes = [];

//adicionar pacientes a lista
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //obter dados do form
  const nome = form.inPaciente.value;

  //adiciona o nome a array - final
  pacientes.push(nome);

  //string para concatenar pacientes
  let lista = "";

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  respLista.innerText = lista;
  form.inPaciente.value = "";
  form.inPaciente.focus();
});

//adicionar pacientes com urgencia
form.btnUrgencia.addEventListener("click", () => {
  if (!form.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência.");
    form.inPaciente.focus();
    return;
  }
  const nome = form.inPaciente.value;
  pacientes.unshift(nome);
  let lista = "";

  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  respLista.innerText = lista;
  form.inPaciente.value = "";
  form.inPaciente.focus();
});

//atender paciente (retirar da lista)
form.btnAtender.addEventListener("click", () => {
  if (pacientes.length == 0) {
    alert("Não há pacientes aguardando atendimento.");
    form.inPaciente.focus();
    return;
  }
  const atender = pacientes.shift(); //remove do início da fila o obtém o nome
  respNome.innerText = atender;

  let lista = "";
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  respLista.innerText = lista;
});
