//programa que leia o valor de uma conta
//e o numero de vezes de parcelamento (boleto ou carne)
// apenas a última parcela deve ter centavos

const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor R$:"));
const numero = Number(prompt("N° de Parcelas:"));

//calcula o valor das parcelas
const valorParcelas = Math.floor(valor / numero); //arredonda para baixo por conta dos centavos
const valorFinal = valorParcelas + (valor % numero); //parcela final soma com o resto da divisao

for (let i = 1; i < numero; i++) {
  console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`);
}
console.log(`${numero}ª parcela: R$ ${valorFinal.toFixed(2)}`);
