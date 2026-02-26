const form = document.querySelector("form");
const divNome = document.querySelector("#divNome");
const cores = [
  "red",
  "blue",
  "yellow",
  "purple",
  "green",
  "orange",
  "grey",
  "deeppink",
  "aquamarine",
  "violet",
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value.trim().split(" ");
  if (nome.length < 2) {
    alert("Informe o nome completo.");
    return;
  }
  exibirNome(nome);
});

const exibirNome = (nome) => {
  const listaH3 = document.querySelectorAll("h3");
  for (let i = listaH3.length - 1; i >= 0; i--) {
    divNome.removeChild(listaH3[i]);
  }

  nome.forEach((parte) => {
    const h3 = document.createElement("h3");
    h3.innerText = parte;
    const corSorteada = Math.floor(Math.random() * 10);
    h3.style.color = cores[corSorteada];
    divNome.appendChild(h3);
  });
};
