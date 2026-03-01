const form = document.querySelector("form");
const divPalco = document.querySelector("#divPalco");

const poltronas = 240;
const reservadas = [];

window.addEventListener("load", () => {
  //verifica se ha dados no localstorage - se nao houver entao inicia o array vazio
  const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

  //repeticao para ontar o numero total de poltronas
  for (let i = 1; i <= poltronas; i++) {
    const figure = document.createElement("figure");
    const imgStatus = document.createElement("img");

    //exibe imagem conforme status ocupado/disponivel
    imgStatus.src = ocupadas.includes(i.toString())
      ? "./img/ocupada.jpg"
      : "./img/disponivel.jpg";
    imgStatus.className = "poltrona";
    const figureCap = document.createElement("figcaption");

    //quantidade de zeros antes do numero da poltrona
    const zeros = i < 10 ? "00" : i < 100 ? "0" : "";
    //cria texto
    const num = document.createTextNode(`[${zeros}${i}]`);

    //define os pais de tag criada
    figureCap.appendChild(num);
    figure.appendChild(imgStatus);
    figure.appendChild(figureCap);

    //se i % 24 == 12 é o corredor - entao margem-right 60px
    if (i % 24 == 12) figure.style.marginRight = "60px";

    divPalco.appendChild(figure);

    //se i % 24 == 0 - quebra de linha
    i % 24 == 0 && divPalco.appendChild(document.createElement("br"));
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const poltrona = Number(form.inPoltrona.value);

  //valida o preenchimento do campo de entrada
  if (poltrona > poltronas) {
    alert("Informe um número de Poltrona Válido.");
    form.inPoltrona.focus();
    return;
  }

  const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

  //se a poltrona escolhida estiver ocupada
  if (ocupadas.includes(poltrona.toString())) {
    alert(`Poltrona ${poltrona} já está ocupada.`);
    form.inPoltrona.value = "";
    form.inPoltrona.focus();
    return;
  }

  //captura a img da poltrona
  const imgPoltrona = divPalco.querySelectorAll("img")[poltrona - 1];
  imgPoltrona.src = "./img/reservada.jpg";

  reservadas.push(poltrona);

  form.inPoltrona.value = "";
  form.inPoltrona.focus();
});

form.btnConfirmar.addEventListener("click", () => {
  if (reservadas.length == 0) {
    alert("Não há poltronas reservadas.");
    form.inPoltrona.focus();
    return;
  }

  const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

  //for decrescente - reservadas vao sendo removidas a cada alteracao de img
  for (let i = reservadas.length - 1; i >= 0; i--) {
    ocupadas.push(reservadas[i]);

    const imgPoltrona = divPalco.querySelectorAll("img")[reservadas[i] - 1];
    imgPoltrona.src = "./img/ocupada.jpg";

    reservadas.pop();
  }
  localStorage.setItem("teatroOcupadas", ocupadas.join(";"));
});
