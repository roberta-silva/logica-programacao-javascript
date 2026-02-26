const form = document.querySelector("form");
const divClube = document.querySelector("#divClube");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = form.inClube.value.trim();
  adicionarClube(clube);
});

//adicionar clube a lista
const adicionarClube = (clube) => {
  const h5 = document.createElement("h5");
  h5.innerText = clube;
  h5.style.fontStyle = "italic";
  h5.style.justifySelf = "end";
  divClube.appendChild(h5);

  form.inClube.value = "";
  form.inClube.focus();
};

form.btnMontar.addEventListener("click", () => {
  listaH5 = document.querySelectorAll("h5");

  if (listaH5.length == 0 || listaH5.length % 2 == 1) {
    alert("O número de clubes inseridos deve ser par");
    return;
  }

  const novoH3 = document.createElement("h3");
  const texto = document.createTextNode("Tabela de Jogos");
  novoH3.appendChild(texto);
  divClube.appendChild(novoH3);

  const novaTable = document.createElement("table");
  novaTable.className = "table table-striped";
  divClube.appendChild(novaTable);

  let linha;
  for (var i = 0; i < listaH5.length; i++) {
    if (i % 2 == 0) {
      linha = novaTable.insertRow(-1);
      const col1 = linha.insertCell(0);
      col1.textContent = listaH5[i].innerText;
    } else {
      const col2 = linha.insertCell(1);
      col2.textContent = listaH5[i].innerText;
    }
  }

  // desabilitar botoes
  form.btnAdicionar.disabled = true;
  form.btnMontar.disabled = true;
});

//botao novos clubes
form.addEventListener("reset", () => {
  window.location.reload();
});
