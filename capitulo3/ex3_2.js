const prompt = require("prompt-sync")();
const veiculo = prompt("veiculo:");
const preco = Number(prompt("preco r$"));
const entrada = preco * 0.5;
const parcela = (preco * 0.5) / 12;
console.log(`promocao ${veiculo}`);
console.log(`entrada de R$ ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(2)}`);
