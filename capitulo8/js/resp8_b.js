const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = form.inNome.value;

  if (!validarNome(nome)) {
    alert("Digite o nome completo.");
    form.inNome.focus();
    return;
  }

  const sobrenome = obterSobrenome(nome).toLowerCase();
  const vogais = String(contarVogais(nome)).padStart(2, "0");

  const senha = sobrenome + vogais;
  resp.innerText = `Senha inicial: ${senha}`;
});

function validarNome(nome) {
  const partes = nome.trim().split(/\s+/);
  if (partes.length < 2) {
    return false;
  } else {
    return true;
  }
}

function obterSobrenome(nome) {
  const ultimo = nome.split(/\s+/).at(-1);
  return ultimo;
}

function contarVogais(nome) {
  const vogais = nome.match(/[aeiouáéíóúâêôãõà]/gi);
  let total = vogais ? vogais.length : 0;
  return total;
}
