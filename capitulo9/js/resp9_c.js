const form = document.querySelector("form");
const pendentes = document.querySelector(".pendentes");
const execucao = document.querySelector(".execucao");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const servico = form.inServico.value;

  if (localStorage.getItem("servicos")) {
    localStorage.setItem(
      "servicos",
      localStorage.getItem("servicos") + ";" + servico,
    );
  } else {
    localStorage.setItem("servicos", servico);
  }

  mostrarPendentes();

  form.reset();
  form.inServico.focus();
});

//mostar quantidade de servicos pendentes
const mostrarPendentes = () => {
  let numPendentes;

  if (localStorage.getItem("servicos")) {
    numPendentes = localStorage.getItem("servicos").split(";").length;
  } else {
    numPendentes = 0;
  }
  pendentes.innerText = numPendentes;
};
window.addEventListener("load", mostrarPendentes);

//executar servico
form.btnExecutar.addEventListener("click", () => {
  if (!localStorage.getItem("servicos")) {
    alert("Não há serviços pendentes para executar");
    return;
  }

  const servicos = localStorage.getItem("servicos").split(";");
  const emExecucao = servicos.shift();

  execucao.innerText = emExecucao;

  localStorage.setItem("servicos", servicos.join(";"));
  mostrarPendentes();
});
