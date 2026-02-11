const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
  //obtem conteudo dos campos
  const titulo = form.inTitulo.value;
  const duracao = Number(form.inDuracao.value);

  //calcula resultados
  const horas = Math.floor(duracao / 60); //arredonda para baixo
  const minutos = duracao % 60; //obtem o resto da divisao

  //exibe os resultados
  resp1.innerText = titulo;
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

  //previne o padrao submit
  e.preventDefault();
});
