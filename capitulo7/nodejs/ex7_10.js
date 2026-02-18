//arvore de natal :)
const prompt = require("prompt-sync")();
const altura = Number(prompt("Altura da árvore: "));

console.log(); //linha em branco

for (let i = 1; i <= altura; i++) {
  const espacos = 30 + (altura - i);
  console.log(" ".repeat(espacos) + "*".repeat(i * 2));
}
