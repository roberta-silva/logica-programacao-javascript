const form = document.querySelector("form");
const resp = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;
  const idade = Number(form.inIdade.value);

  const tracos = retornarTracos(nome);
  const categoria = categorizarAluno(idade);

  resp.innerText = `${nome}\n${tracos}\nCategoria: ${categoria}`;
});

//tracos
function retornarTracos(texto) {
  const tracos = texto.replace(/[a-zA-ZÀ-ÿ]/g, "-");
  return tracos;
}

//categorizar
function categorizarAluno(idade) {
  let categoria;

  if (idade < 12) {
    categoria = "Infantil";
  } else if (idade >= 12 && idade < 18) {
    categoria = "Juvenil";
  } else {
    categoria = "Adulto";
  }
  return categoria;
}
