//esse programa sera desenvolvido mais a frente

const form = document.querySelector("form");
const resp = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fruta = form.inFruta.value.toUpperCase();
  let resposta = "";

  for (const letra of fruta) {
    if (letra == fruta.charAt(0)) {
      resposta += fruta.charAt(0);
    } else {
      resposta += "_";
    }
  }
  resp.innerText = resposta;
  form.inFruta.value = "*".repeat(fruta.length);
});
