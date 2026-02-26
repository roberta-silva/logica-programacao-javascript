const form = document.querySelector("form");
const tbFilmes = document.querySelector("table");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = form.inTitulo.value;
  const genero = form.inGenero.value;

  inserirLinha(titulo, genero);
  gravarFilme(titulo, genero);

  form.reset();
  form.inTitulo.focus();
});

//inserir linha
const inserirLinha = (titulo, genero) => {
  const linha = tbFilmes.insertRow(-1);

  const col1 = linha.insertCell(0);
  const col2 = linha.insertCell(1);
  const col3 = linha.insertCell(2);

  col1.innerText = titulo;
  col2.innerText = genero;
  col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i> ";
};

//gravar filme
const gravarFilme = (titulo, genero) => {
  //se houver dados no localStorage
  if (localStorage.getItem("filmesTitulo")) {
    //pega os dados e adiciona os novos
    const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
    const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;
    localStorage.setItem("filmesTitulo", filmesTitulo);
    localStorage.setItem("filmesGenero", filmesGenero);
  } else {
    //se não há dados - então apenas adiciona
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
};

//exibir lista quando pagina for recarregada
window.addEventListener("load", () => {
  //se houver dados no localStorage
  if (localStorage.getItem("filmesTitulo")) {
    //obtem dados e transforma em array
    const titulos = localStorage.getItem("filmesTitulo").split(";");
    const generos = localStorage.getItem("filmesGenero").split(";");

    //percorre os elementos e os insere na tabela
    for (let i = 0; i < titulos.length; i++) {
      inserirLinha(titulos[i], generos[i]);
    }
  }
});

//remover filmes
tbFilmes.addEventListener("click", (e) => {
  //se a classe do elemento alvo clicado contem 'exclui'
  if (e.target.classList.contains("exclui")) {
    //accesa o 'pai do pai' do elemento alvo, e obtem o texto do primeiro filho
    const titulo = e.target.parentElement.parentElement.children[0].innerText;

    if (confirm(`Confirma exclusão do filme "${titulo}"?`)) {
      e.target.parentElement.parentElement.remove();

      localStorage.removeItem("filmesTitulo");
      localStorage.removeItem("filmesGenero");

      //salva novamente, se existir, acessando o conteudo da tabela
      for (let i = 1; i < tbFilmes.rows.length; i++) {
        //obtem o conteudo da tabela
        const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
        const auxGenero = tbFilmes.rows[i].cells[0].innerText;
        gravarFilme(auxTitulo, auxGenero);
      }
    }
  }
});
