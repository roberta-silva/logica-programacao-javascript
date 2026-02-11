const prompt = require("prompt-sync")();
const total = Number(prompt("Valor de Compra R$:"));

//calcula a quantidade possivel de parcelas de 20 minimo
const parcelasCalculadas = Math.floor(total / 20);

//calcula a quantidade de parcelas respeitando a regra de max 6x
const parcelas =
  parcelasCalculadas == 0 ? 1 : parcelasCalculadas > 6 ? 6 : parcelasCalculadas;

//calcula o valor da parcela
const vlParcela = total / parcelas;

//exibir
console.log(`Pode pagar em ${parcelas}x de R$: ${vlParcela.toFixed(2)}`);
