const form = document.querySelector("form");
const resp = document.querySelector("pre");

const clubes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = form.inClube.value;

  if (!clube == true) {
    alert("Digite um clube válido.");
    form.inClube.focus();
    return;
  }
  clubes.push(clube);
  form.reset();
  form.inClube.focus();
  form.btnListar.dispatchEvent(new Event("click"));
});

//listar clubes
form.btnListar.addEventListener("click", () => {
  if (clubes.length == 0) {
    alert("Não há clubes para listar.");
    form.inClube.focus();
    return;
  }
  let lista = "";
  for (const clube of clubes) {
    lista += clube + "\n";
  }
  resp.innerText = lista;
});

//montar tabela
form.btnMontar.addEventListener("click", () => {
  const tamanho = clubes.length;

  if (tamanho == 0 || tamanho % 2 != 0) {
    alert("Deve haver número par de clubes");
    form.inClube.focus();
    return;
  }

  let jogos = "";
  const ultimo = tamanho - 1;
  for (i = 0; i < tamanho / 2; i++) {
    jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n";
  }

  resp.innerText = jogos;
});
