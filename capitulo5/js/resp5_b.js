const form = document.querySelector("form");
const resp = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const qtdeAnos = Number(form.inAnos.value);
  let qtdeChinchilas = Number(form.inChinchilas.value);

  let resposta = "";
  if (qtdeChinchilas < 2) {
    alert(
      "É preciso ter no mínimo duas Chinchilas para que elas se reproduzam.",
    );
    form.inChinchilas.focus();
    return;
  }

  for (let i = 1; i <= qtdeAnos; i++) {
    if (i == 1) {
      resposta = `${i}° ano: ${qtdeChinchilas} Chinchilas.\n`;
    } else {
      qtdeChinchilas = qtdeChinchilas * 3;
      resposta = `${resposta}${i}° ano: ${qtdeChinchilas} Chinchilas.\n`;
    }
  }
  resp.innerText = resposta;
});
