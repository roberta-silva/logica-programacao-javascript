const inRadios = document.querySelectorAll("input");
const imgClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
  const clubes = ["Brasil", "Pelotas", "Farroupilha"];
  let selecao;

  //percorrer os inRadios para verificar qual está selecionado
  for (let i = 0; i < inRadios.length; i++) {
    if (inRadios[i].checked) {
      selecao = i;
      break;
    }
  }

  if (selecao <= 2) {
    dvTitulo.className = `row cores-${clubes[selecao]}`;
    imgClube.src = `./img/${clubes[selecao].toLowerCase()}.png`;
    imgClube.className = "img-fluid";
    imgClube.alt = `Símbolo do ${clubes[selecao]}`;
    localStorage.setItem("clube", clubes[selecao]);
  } else {
    dvTitulo.className = "row";
    imgClube.className = "d-none";
    imgClube.alt = "";
    localStorage.removeItem("clube");
  }
};

for (const inRadio of inRadios) {
  inRadio.addEventListener("change", trocarClube);
}

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    const clube = localStorage.getItem("clube");

    if (clube == "Brasil") {
      inRadios[0].checked = true;
    } else if (clube == "Pelotas") {
      inRadios[1].checked = true;
    } else {
      inRadios[2].checked = true;
    }
    trocarClube();
  }
};

window.addEventListener("load", verificarClube);

//contador de visitas
const qtdeVisitas = document.querySelector("h6");

const contarVisitas = () => {
  let contador = 0;

  const visitasSalvas = localStorage.getItem("contadorVisitas");

  if (visitasSalvas) {
    contador = Number(visitasSalvas);
  }

  contador++;

  if (contador === 1) {
    qtdeVisitas.innerText = "Primeira Visita!";
  } else {
    qtdeVisitas.innerText = `Visita n° ${contador}`;
  }

  localStorage.setItem("contadorVisitas", contador);
};
contarVisitas();
