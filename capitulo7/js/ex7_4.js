const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value.trim();

  if (!nome.includes(" ")) {
    alert("Informe o nome completo.");
    return;
  }
  const primeiroEspaco = nome.indexOf(" ");
  const ultimoEspaco = nome.lastIndexOf(" ");

  const cracha = nome.substr(0, primeiroEspaco) + nome.substr(ultimoEspaco);

  resp.innerText = `Crachá: ${cracha}`;
});
