const prompt = require("prompt-sync")();
const anuncio = prompt("Anúncio: ");
const tam = anuncio.length;

//EXEMPLO 1 ----------------------------
// let numPalavras = 0;
// for (let i = 0; i < tam; i++) {
//   if (anuncio.charAt(i) == " ") {
//     numPalavras++;
//   }
// }

//EXEMPLO 2 ----------------------------
let numPalavras = 0;
for (const letra of anuncio) {
  if (letra == " ") {
    numPalavras++;
  }
}

console.log(`Nº Palavras: ${numPalavras + 1} `);
