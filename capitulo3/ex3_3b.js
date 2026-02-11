const prompt = require("prompt-sync")();

const pesoRacao = Number(prompt("Peso da Ração (kg):"));
const consumoDiario = Number(prompt("Consumo diário (gr):"));

const pesoGr = pesoRacao * 1000;
const diasDuracao = Math.floor(pesoGr / consumoDiario);
const sobraRacao = pesoGr % consumoDiario;

console.log(`Duração: ${diasDuracao} dias`);
console.log(`Sobra: ${sobraRacao}gr`);
