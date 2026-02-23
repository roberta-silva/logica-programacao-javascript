const form = document.querySelector("form");
const respLista = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;
  const peso = Number(form.inPeso.value);

  if (verApostaExiste(peso)) {
    alert("Álguem já apostou esse peso, informe outro.");
    form.inPeso.focus();
    return;
  }

  if (localStorage.getItem("melanciaNome")) {
    //se houver dados no localstorage
    const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    localStorage.setItem("melanciaNome", nome);
    localStorage.setItem("melanciaPeso", peso);
  }

  mostrarApostas();
  form.reset();
  form.inNome.focus();
});

const verApostaExiste = (peso) => {
  if (localStorage.getItem("melanciaPeso")) {
    const pesos = localStorage.getItem("melanciaPeso").split(";");
    return pesos.includes(peso.toString());
  } else {
    return false;
  }
};

const mostrarApostas = () => {
  if (!localStorage.getItem("melanciaNome")) {
    respLista.innerText = "";
    return;
  }

  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  let linhas = "";

  for (let i = 0; i < nomes.length; i++) {
    linhas += nomes[i] + " - " + pesos[i] + "gr \n";
  }

  respLista.innerText = linhas;
};

window.addEventListener("load", mostrarApostas);

form.btnVencedor.addEventListener("click", () => {
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas.");
    return;
  }

  //solicita o peso correto da melancia
  const pesoCorreto = Number(prompt("Qual é o peso da correto melancia?"));
  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return;
  }

  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  //valor incicial para vencedor é o da primeira aposta
  let vencedorNome = nomes[0];
  let vencedorPeso = Number(pesos[0]);

  //percorre as apostas
  for (let i = 1; i < nomes.length; i++) {
    const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

    if (difAposta < difVencedor) {
      vencedorNome = nomes[i];
      vencedorPeso = Number(pesos[i]);
    }
  }

  let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
  mensagem += "\n -----------------------------------------";
  mensagem += "\nVencedor: " + vencedorNome;
  mensagem += "\nAposta: " + vencedorPeso + "gr";
  alert(mensagem);
});

form.btnLimpar.addEventListener("click", () => {
  //solicita confirmação para excluir as apostas
  if (confirm("Confirma Exclisão de todas as apostas?")) {
    localStorage.removeItem("melanciaNome");
    localStorage.removeItem("melanciaPeso");
    mostrarApostas();
  }
});
