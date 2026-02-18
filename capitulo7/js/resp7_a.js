const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const mensagem = form.inMensagem.value;
  const tam = mensagem.length;

  let msgCripto = "";

  //par
  for (let i = 1; i < tam; i = i + 2) {
    msgCripto += mensagem.charAt(i);
  }

  //impar
  for (let i = 0; i < tam; i = i + 2) {
    msgCripto += mensagem.charAt(i);
  }
  resp.innerText = msgCripto;
});

form.btnDescripto.addEventListener("click", () => {
  if (!form.checkValidity()) {
    alert("Informe a mensagem criptografada.");
    form.inMensagem.focus();
    return;
  }

  const mensagem = form.inMensagem.value;
  const tam = mensagem.length;
  const metade = Math.floor(tam / 2);
  msgDescripto = "";

  if (tam % 2 == 0) {
    for (let i = metade; i < tam; i++) {
      msgDescripto += mensagem.charAt(i);
      msgDescripto += mensagem.charAt(i - metade);
    }
  } else {
    for (let i = metade; i < tam - 1; i++) {
      msgDescripto += mensagem.charAt(i);
      msgDescripto += mensagem.charAt(i - metade);
    }
    msgDescripto += mensagem.charAt(tam - 1);
  }
  resp.innerText = msgDescripto;
});
