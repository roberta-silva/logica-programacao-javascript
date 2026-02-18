const form = document.querySelector("form");
const resp = document.querySelector("pre");

const itens = [];

//click radio buttons
form.rbPizza.addEventListener("click", () => {
  form.inBebida.className = "oculta";
  form.inPizza.className = "exibe";
});
form.rbBebida.addEventListener("click", () => {
  form.inPizza.className = "oculta";
  form.inBebida.className = "exibe";
});

//detalhes do item
form.inDetalhes.addEventListener("focus", () => {
  if (form.rbPizza.checked) {
    const pizza = form.inPizza.value;

    //uso do opreador ternario para indicar sabores
    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;

    //atributo placeholder para exibir dica de preenchimento do campo
    form.inDetalhes.placeholder = `até ${num} sabores`;
  }
});
form.inDetalhes.addEventListener("blur", () => {
  form.inDetalhes.placeholder = "";
});

//
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let produto;

  if (form.rbPizza.checked) {
    const num = form.inPizza.selectedIndex;
    produto = form.inPizza.options[num].text;
  } else {
    const num = form.inBebida.selectedIndex;
    produto = form.inBebida.options[num].text;
  }
  const detalhes = form.inDetalhes.value;
  itens.push((produto + " (" + detalhes + ")"));
  resp.innerText = itens.join("\n");

  form.reset();
  form.rbPizza.dispatchEvent(new Event("click"));
});
