const prompt = require("prompt-sync")();

//data hoje e amanha
const hoje = new Date();
const amanha = new Date();
const dia = amanha.getDate();
amanha.setDate(dia + 1);
console.log(`Hoje é ${hoje}\nAmanhã será ${amanha}`);

//data de nascimento
const anoAtual = new Date().getFullYear();
const idade = prompt(`Quantos anos você comemora em ${anoAtual}? `);
const anoNasc = anoAtual - idade;
console.log(`Ah... então você nasceu em ${anoNasc}.`)
