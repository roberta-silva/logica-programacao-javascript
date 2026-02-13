const form = document.querySelector("form");
const resp = document.querySelector("pre");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);
  let resposta = `Entre ${numero} e 1: `;

  for (let i = numero; i > 1; i = i - 1) {
    resposta = `${resposta}${i}, `;
  }
  resposta = `${resposta}1.`;
  
  resp.innerText = resposta;
});
