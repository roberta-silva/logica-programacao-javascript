//criar referencia aos elementos html
const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//criar 'ouvinte' de evento, acionando ao clicar em submit
form.addEventListener("submit", (e) => {
  //evita o envio do form (nao reccarega a pagina)
  e.preventDefault();
  //obter valores do form
  const nome = form.inNome.value;
  const nota1 = Number(form.inNota1.value);
  const nota2 = Number(form.inNota2.value);

  //calcular media das notas
  const media = (nota1 + nota2) / 2;

  //exibir respostas
  resp1.innerText = `Média das Notas: ${media.toFixed(2)}`;

  //criar condicoes
  if (media >= 7) {
    //alterar texto e estilo do elemento resp2
    resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a).`;
    resp2.style.color = "green";
  } else if (media >= 4) {
    resp2.innerText = `Atenção ${nome}. Você está em exame.`;
    resp2.style.color = "blue";
  } else {
    resp2.innerText = `Ops ${nome}... Você foi reprovado(a).`;
    resp2.style.color = "red";
  }
});
