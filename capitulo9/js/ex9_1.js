const form = document.querySelector("form");
const imgClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
  let clube;

  if (form.rbBrasil.checked) {
    clube = "Brasil";
  } else if (form.rbPelotas.checked) {
    clube = "Pelotas";
  } else {
    clube = "Farroupilha";
  }

  //define as classes de dvTitulo: row e cores do clube
  dvTitulo.className = `row cores-${clube}`;

  //modifica a imagem de acordo com a selecao do cliente
  imgClube.src = `./img/${clube.toLowerCase()}.png`;
  imgClube.className = "img-fluid";
  imgClube.alt = `Símbolo do ${clube}`;

  localStorage.setItem("clube", clube);
};

//associa ao evento change de cada botao do form a funcao trocarClube
form.rbBrasil.addEventListener("change", trocarClube);
form.rbPelotas.addEventListener("change", trocarClube);
form.rbFarroupilha.addEventListener("change", trocarClube);

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    const clube = localStorage.getItem("clube");

    if (clube == "Brasil") {
      form.rbBrasil.checked = true;
    } else if (clube == "Pelotas") {
      form.rbPelotas.checked = true;
    } else {
      form.rbFarroupilha.checked = true;
    }
    trocarClube();
  }
};

//ao carregar a pagina
//verifica se cliente ja selecionou clube anteriormente
window.addEventListener("load", verificarClube);
