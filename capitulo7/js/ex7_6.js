const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = form.inSenha.value;
  const erros = [];

  //verificar se o tamanho é válido
  if (senha.length < 8 || senha.length > 15) {
    erros.push("Possuir entre 8 e 15 caracteres");
  }

  //verificar se não possui números
  if (senha.match(/[0-9]/g) == null) {
    erros.push("Possuir ao menos 1 número");
  }

  //verificar se não possui letras minúscula
  if (!senha.match(/[a-z]/g)) {
    erros.push("Possuir ao menos 1 letras minúscula");
  }

  //verificar se não possui letras MAIÚSCULAS ou se possui apenas 1
  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push("Possuir ao menos 2 letras MAIÚSCULAS");
  }

  //verificar se não possui símbolos ou '_'
  if (!senha.match(/[\W|_]/g)) {
    erros.push("Possuir ao menos 1 caracter especial");
  }

  //se o vetor está vazio (não foram encontrados erros)
  if (erros.length == 0) {
    resp.innerText = "Ok! Senha válida.";
  } else {
    resp.innerText = `Erro... A senha deve:\n${erros.join("\n")}`;
    return
  }
});
