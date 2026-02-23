const form = document.querySelector("form");
const resp = document.querySelector("pre");

//adicionar item a lista
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = form.inProduto.value;

  if (verificarItem(item)) {
    alert("item ja está na lista.");
    return;
  }

  if (localStorage.getItem("Lista")) {
    const lista = localStorage.getItem("Lista") + ";" + item;
    localStorage.setItem("Lista", lista);
  } else {
    localStorage.setItem("Lista", item);
  }

  console.log(localStorage.getItem("Lista"));
  form.reset();
  form.inProduto.focus();
  exibirLista();
});

//verificar se o item ja está na lista
const verificarItem = (item) => {
  if (localStorage.getItem("Lista")) {
    const lista = localStorage.getItem("Lista").split(";");

    if (lista.includes(item)) {
      return true;
    } else {
      return false;
    }
  }
};

//exibir lista
const exibirLista = () => {
  if (localStorage.getItem("Lista")) {
    let itens = localStorage.getItem("Lista").split(";");

    let lista = "Produtos Adicionados:\n---------------------";

    itens.forEach((item) => {
      lista = lista + "\n" + item;
    });
    resp.innerText = lista;
  } else {
    resp.innerText = "";
  }
};

//limpar lista
form.btnLimpar.addEventListener("click", () => {
  if (confirm("Deseja apagar todos os itens da lista?")) {
    localStorage.removeItem("Lista");
    exibirLista();
  }
});
