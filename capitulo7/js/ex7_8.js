const form = document.querySelector("form");

const taxaMulta = 2 / 100;
const taxaJuros = 0.33 / 100;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataVenc = form.inDataVenc.value;
  const valor = Number(form.inValor.value);

  const hoje = new Date();
  const vcto = new Date();

  const partes = dataVenc.split("-");
  vcto.setDate(Number(partes[2]));
  vcto.setMonth(Number(partes[1]) - 1);
  vcto.setFullYear(Number(partes[0]));

  const atraso = hoje - vcto;
  let multa = 0;
  let juros = 0;

  if (atraso > 0) {
    const dias = atraso / 86400000;
    multa = valor * taxaMulta;
    juros = valor * taxaJuros * dias;
  }
  const total = valor + multa + juros;

  form.outMulta.value = multa.toFixed(2);
  form.outJuros.value = juros.toFixed(2);
  form.outTotal.value = total.toFixed(2);
});
