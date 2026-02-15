const form = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //obter dados do formulario
  const nome = form.inNome.value;
  const idade = Number(form.inIdade.value);

  //inserir dados no array
  criancas.push({ nome, idade });

  form.reset(); //limpar os campos do form
  form.inNome.focus();
  form.btnListar.dispatchEvent(new Event("click")); //dispara o evento de click no btnListar
});

// Listar dados
form.btnListar.addEventListener("click", () => {
  if (criancas.length == 0) {
    alert("Não há crianças na lista.");
    return;
  }
  let lista = ""; //para concatenar lista de crianças
  for (const crianca of criancas) {
    const { nome, idade } = crianca; //desestrutura o objeto
    lista += nome + " - " + idade + " anos\n";
  }
  resp.innerText = lista;
});

//resumir por idade
form.btnResumir.addEventListener("click", () => {
  if (criancas.length == 0) {
    alert("Não há crianças na lista.");
    return;
  }
  const copia = [...criancas]; //cria uma copia do array criancas
  copia.sort((a, b) => a.idade - b.idade); //ordena pela idade
  let resumo = ""; //para concatenar a saida
  let aux = copia[0].idade; //menor idade do array ordenado
  let nomes = []; //para inserir nomes de cada idade

  for (const crianca of copia) {
    const { nome, idade } = crianca;

    //se for da mesma idade (aux)
    if (idade == aux) {
      nomes.push(nome);
    } else {
      resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";
      aux = idade;
      nomes = []; //limpa array dos nomes
      nomes.push(nome);
    }
  }
  //adicionar a ultima crianca
  resumo += aux + " ano(s): " + nomes.length + "crianca(s) - ";
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";
  resp.innerText = resumo;
});
