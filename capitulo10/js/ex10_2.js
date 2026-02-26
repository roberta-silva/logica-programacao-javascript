const form = document.querySelector("form");
const divMoedas = document.querySelector("#divMoedas");

window.addEventListener("load", () => {
  //gera números aleatórios entre 1 e 5, para cada moeda
  const num1_00 = Math.ceil(Math.random() * 5);
  const num0_50 = Math.ceil(Math.random() * 5);
  const num0_25 = Math.ceil(Math.random() * 5);
  const num0_10 = Math.ceil(Math.random() * 5);

  //define o txt alt das imagens (acessibilidade)
  const alt1_00 = "Moedas de um real";
  const alt0_50 = "Moedas cinquenta centavos";
  const alt0_25 = "Moedas de vinte e cinco centavos";
  const alt0_10 = "Moedas de dez centavos";

  //chama o método criarMoedas passando os argumentos
  criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1_00");
  criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0_50");
  criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0_25");
  criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0_10");
});

//criar moedas
const criarMoedas = (num, moeda, textoAlt, classe) => {
  for (let i = 1; i <= num; i++) {
    const novaMoeda = document.createElement("img");

    novaMoeda.src = "./img/" + moeda;
    novaMoeda.textAlt = textoAlt;
    novaMoeda.className = classe;

    divMoedas.appendChild(novaMoeda);
  }
  const br = document.createElement("br");
  divMoedas.appendChild(br);
};

//conferir respostas
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const soma = Number(form.inSoma.value);
  const moedas = divMoedas.querySelectorAll("img");

  let totalMoedas = 0;

  //percorre as tags img (em moedas) e verifica a propriedade className
  for (const moeda of moedas) {
    if (moeda.className == "moeda1_00") {
      totalMoedas += 1;
    } else if (moeda.className == "moeda0_50") {
      totalMoedas += 0.5;
    } else if (moeda.className == "moeda0_25") {
      totalMoedas += 0.25;
    } else {
      totalMoedas += 0.1;
    }
  }

  const div = document.createElement("div");
  const h3 = document.createElement("h3");

  let mensagem = "";

  if (soma == totalMoedas.toFixed(2)) {
    div.className = "alert alert-success";
    mensagem = "Parabéns!! Você acertou!";
  } else {
    div.className = "alert alert-danger";
    mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`;
  }

  const texto = document.createTextNode(mensagem);
  h3.appendChild(texto);
  div.appendChild(h3);
  divMoedas.appendChild(div);

  form.submit.disabled = true;
});

//exibir novas moedas
form.addEventListener("reset", () => {
  window.location.reload();
});
