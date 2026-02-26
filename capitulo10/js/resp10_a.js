const form = document.querySelector("form");
const div = document.querySelector("#divVelas");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //obtem dados do form
  const idade = form.inIdade.value;
  criarVelas(idade);
});

//criar velas
const criarVelas = (idade) => {
  for (let i = 0; i < idade.length; i++) {
    //obtem cada caracter da idade
    const numeroVela = idade.charAt(i);
    const vela = document.createElement("img");

    vela.src = "./img/" + numeroVela + ".jpg";
    vela.alt = `Vela de ${numeroVela} anos`;

    div.appendChild(vela);
  }
  btnExibir.disabled = true;
};

//novas velas
form.addEventListener("reset", () => {
  window.location.reload();
});
