const form = document.querySelector("form");
const divQuadro = document.querySelector("#divQuadro");

//adicionar tag h5 com o texto das tarefas
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tarefa = form.inTarefa.value;

  const h5 = document.createElement("h5"); // cria o elemento h5
  const texto = document.createTextNode(tarefa); //cria um texto
  h5.appendChild(texto); //define que texto será filho de h5
  divQuadro.appendChild(h5); //define que h5 será filho de divQuadro

  form.inTarefa.value = "";
  form.inTarefa.focus();
});

//selecionar tarefa
form.btnSelecionar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5"); // obtem as tags h5

  if (tarefas.length == 0) {
    alert("Não há tarefas para selecionar.");
    return;
  }

  let aux = -1; // variavel aux para indicar linha selecionada

  for (let i = 0; i < tarefas.length; i++) {
    //se a tag tiver a class tarefa-selecionada
    if (tarefas[i].className == "tarefa-selecionada") {
      tarefas[i].className = "tarefa-normal";
      aux = i;
      break;
    }
  }

  //se a linha que está selecionada é a última, volta para primeira
  if (aux == tarefas.length - 1) {
    aux = -1;
  }

  tarefas[aux + 1].className = "tarefa-selecionada";
});

//retirar tarefa selecionada
form.btnRetirar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");

  let aux = -1;

  tarefas.forEach((tarefa, index) => {
    if (tarefa.className == "tarefa-selecionada") {
      aux = index;
    }
  });

  if (aux == -1) {
    alert("Selecione uma tarefa para removê-la.");
    return;
  }

  if (confirm(`Confirma exclusão de "${tarefas[aux].innerText}"?`)) {
    divQuadro.removeChild(tarefas[aux]);
  }
});

//gravar tarefas no localStorage
form.btnGravar.addEventListener("click", () => {
  const tarefas = document.querySelectorAll("h5");

  if (tarefas.length == 0) {
    alert("Não há tarefas a serem gravadas.");
    return;
  }

  let dados = ""; // irá acumular os dados a serem salvos

  tarefas.forEach((tarefa) => {
    dados += tarefa.innerText + ";";
  });

  //grava os dados no localStorage, removendo o último ;
  localStorage.setItem("tarefasDia", dados.slice(0, -1));

  //confere se dados foram armazenados
  if (localStorage.getItem("tarefasDia")) {
    alert("Ok! Tarefas salvas.");
  }
});

//recupera dados salvos no localStorage ao recarregar a pag
window.addEventListener("load", () => {
  if (localStorage.getItem("tarefasDia")) {
    const dados = localStorage.getItem("tarefasDia").split(";");

    dados.forEach((dado) => {
      const h5 = document.createElement("h5");
      const texto = document.createTextNode(dado);
      h5.appendChild(texto);
      divQuadro.appendChild(h5);
    });
  }
});
