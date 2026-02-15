const form = document.querySelector("form");
const resp = document.querySelector("pre");

const carros = []; //declara vetor GLOBAL

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //obtém dados do formulário
  const modelo = form.inModelo.value;
  const preco = Number(form.inPreco.value);

  //adiciona dados ao vetor
  carros.push({ modelo, preco });
  console.log(carros);

  //limpae campos do formulário para continuar digitaçao
  form.inModelo.value = "";
  form.inPreco.value = "";
  inModelo.focus();

  //dispara um evento de click em btnListar (como se o botao fosse clicado)
  form.btnListar.dispatchEvent(new Event("click"));
});

//listar
form.btnListar.addEventListener("click", () => {
  //se não ouver carros na lista
  if (carros.length == 0) {
    alert("Não há carros na lista.");
    return;
  }

  //reduce() - concatenar string, obtendo modelo e preco do veiculo
  const lista = carros.reduce(
    (acumulador, carro) =>
      acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n",
    "",
  );
  resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
});

//filtrar
form.btnFiltrar.addEventListener("click", () => {
  const maximo = Number(
    prompt("Qual o valor máximo que o cliente deseja pagar?"),
  );
  if (maximo == 0 || isNaN(maximo)) {
    return;
  }
  //cria um novo vetor com os objetos que atendem a condicao de filtro
  const carrosFilter = carros.filter((carro) => carro.preco <= maximo);
  if (carrosFilter.length == 0) {
    alert("Não há carros com preço inferior ou igual ao solicitado.");
    return;
  }
  let lista = "";
  for (const carro of carrosFilter) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});

//simular promocao
form.btnSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Informe o percentual de desconto:"));
  if (desconto == 0 || isNaN(desconto)) {
    return;
  }
  const carrosDesc = carros.map((aux) => ({
    modelo: aux.modelo,
    preco: aux.preco - aux.preco * (desconto / 100),
  }));
  let lista = "";
  for (const carro of carrosDesc) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
});
