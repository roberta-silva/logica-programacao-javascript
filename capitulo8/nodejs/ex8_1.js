const prompt = require("prompt-sync")();

const situacao = (nota, media = 6) => {
  if (nota >= media) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
};

const prova1 = Number(prompt("Nota: "));
situacao(prova1, 7);

const situacao2 = (nota, media) => {
  const resultado = nota >= media ? "Aprovado" : "Reprovado";
  return resultado;
};
const aluno1 = situacao2(prova1, 7);

