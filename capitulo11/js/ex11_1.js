const form = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

//nome dos cavalos participantes do pareo
const cavalos = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

//array que irá armazenar um objeto aposta (n cavalo e valor)
const apostas = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cavalo = Number(form.inCavalo.value);
  const valor = Number(form.inAposta.value);

  //adiciona ao array
  apostas.push({ cavalo, valor });

  //variavel para exibir a lista das apostas realizadas
  let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

  //percorre o array e concatena em lista as apostas realizadas
  for (const aposta of apostas) {
    lista += `N° ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
    lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;
  }

  respLista.innerText = lista;

  form.reset();
  form.inCavalo.focus();
});

const obterCavalo = (num) => {
  const posicao = num - 1;
  return cavalos[posicao];
};

form.inCavalo.addEventListener("blur", () => {
  //se nao preencheu o campo, limpa respCavalo e retorna
  if (form.inCavalo.value == "") {
    respCavalo.innerText = "";
    return;
  }

  const numCavalo = Number(form.inCavalo.value); //numero do cavalo

  if (!validarCavalo(numCavalo)) {
    alert("N° do Cavalo inválido.");
    form.inCavalo.focus();
    return;
  }

  const nome = obterCavalo(numCavalo);
  const contaNum = contarApostas(numCavalo);
  const total = totalizarApostas(numCavalo);

  respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`;
});

const validarCavalo = (num) => {
  return num >= 1 && num <= cavalos.length;
};

const contarApostas = (num) => {
  let contador = 0;

  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      contador++;
    }
  }
  return contador;
};

const totalizarApostas = (num) => {
  let total = 0;
  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      total += aposta.valor;
    }
  }
  return total;
};

//quando o inCavalo recebe foco limpa o conteudo e dados do cavalo
form.inCavalo.addEventListener("focus", () => {
  form.inCavalo.value = "";
  respCavalo.innerText = "";
});

//botao resumo
form.btnResumo.addEventListener("click", () => {
  const somaApostas = [0, 0, 0, 0, 0, 0]; //valor zerado para cada cavalo

  for (const aposta of apostas) {
    somaApostas[aposta.cavalo - 1] += aposta.valor;
  }
  //exibe o resultado
  let resposta = `N° Cavalo .............. R$ Apostado\n${"-".repeat(35)}\n`;

  cavalos.forEach((cavalo, index) => {
    resposta += `${index + 1} ${cavalo.padEnd(20)}`;
    resposta += `${somaApostas[index].toFixed(2).padStart(11)}\n`;
  });
  respLista.innerText = resposta;
});

//botao ganhador
form.btnGanhador.addEventListener("click", () => {
  //solicita o numero do cavalo ganhador
  const ganhador = Number(prompt("Número do cavalo ganhador: "));

  //valida o preenchimento do prompt
  if (isNaN(ganhador) || !validarCavalo(ganhador)) {
    alert("Cavalo Inválido.");
    return;
  }

  //uso do método resuce para somar o valor das apostas
  const total = apostas.reduce(
    (acumulador, aposta) => acumulador + aposta.valor,
    0,
  );

  //concatena em resumo o resultado a ser exibido na pag
  let resumo = `Resultado Final do Páreo\n${"-".repeat(30)}\n`;

  resumo += `N° total de apostas: ${apostas.length}\n`;
  resumo += `Total geral R$: ${total.toFixed(2)}\n\n`;
  resumo += `Ganhador N° ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
  resumo += `N° de apostas: ${contarApostas(ganhador)}\n`;
  resumo += `Total apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;

  respLista.innerText = resumo;

  form.btnApostar.disabled = true;
  form.btnGanhador.disabled = true;
  form.btnNovo.focus();
});

//recarrega a pagina ao clicar em novo pareo
form.btnNovo.addEventListener("click", () => window.location.reload());
