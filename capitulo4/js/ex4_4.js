//referencias elementos html
const form = document.querySelector("form");
const resp = document.querySelector("h3");

//ouvinte de evento - ao submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //obter conteudo do form
  const horaBrasil = Number(form.inHoraBrasil.value);

  //converter hora
  let horaFranca = horaBrasil + 5;
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }
  //exibir resposta
  resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`;
});
console.log("23");
