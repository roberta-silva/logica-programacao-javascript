const form = document.querySelector("form");
const resposta = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  const nome = form.inNome.value;
  resposta.innerText = `Olá, ${nome}`;
  e.preventDefault();
});
