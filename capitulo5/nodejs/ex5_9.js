//programa de etiquetas
//imprimir até duas etiquetas por linha

const prompt = require("prompt-sync")();
const produto = prompt("Produto:");
const numero = Number(prompt("N° de Etiquetas:"));

//cria um laço de repetição até o numero 2 (2 etiquetas por linha)
for (let i = 1; i <= numero / 2; i++) {
  console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`);
}

//se a quantidade de etiquetas for impar
if (numero % 2 == 1) {
  console.log(produto);
}
