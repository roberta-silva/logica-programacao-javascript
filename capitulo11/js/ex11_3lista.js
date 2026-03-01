const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("input[type='checkbox']");

const montarTabela = () => {
  if (localStorage.getItem("jogoPalavra")) {
    const palavras = localStorage.getItem("jogoPalavra").split(";");
    const dicas = localStorage.getItem("jogoDica").split(";");

    for (let i = 0; i < palavras.length; i++) {
      const linha = tbPalavras.insertRow(-1);

      const coluna1 = linha.insertCell(0);
      const coluna2 = linha.insertCell(1);
      const coluna3 = linha.insertCell(2);

      coluna1.innerText = palavras[i];
      coluna2.innerText = dicas[i];
      coluna3.innerHTML = '<i class="exclui" title="Excluir">&#10008;</i>';
    }
  }
};
// quando o checkbox é alterado
ckMostrar.addEventListener("change", () => {
  ckMostrar.checked ? montarTabela() : window.location.reload();
});

//excluir palavras
tbPalavras.addEventListener("click", (e) => {
  if (e.target.classList.contains("exclui")) {
    const palavra = e.target.parentElement.parentElement.children[0].innerText;
    if (confirm(`Confirma a exclusão da palavra "${palavra}"?`)) {
      e.target.parentElement.parentElement.remove();

      localStorage.removeItem("jogoPalavra");
      localStorage.removeItem("jogoDica");

      const palavras = [];
      const dicas = [];

      for (let i = 1; i < tbPalavras.rows.length; i++) {
        palavras.push(tbPalavras.rows[i].cells[0].innerText);
        dicas.push(tbPalavras.rows[i].cells[0].innerText);
      }
      localStorage.setItem("jogoPalavra", palavras.join(";"));
      localStorage.setItem("jogoDica", dicas.join(";"));
    }
  }
});
