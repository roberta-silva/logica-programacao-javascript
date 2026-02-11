const prompt = require("prompt-sync")();
const salario = Number(prompt(`Salário R$:`));
const tempo = Number(prompt(`Tempo (anos):`));

const quadrienios = Math.floor(tempo / 4);
const acrescimo = (quadrienios / 100) * salario;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final: R$ ${(salario + acrescimo).toFixed(2)}`);
