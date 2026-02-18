const calcularMedia = (...notas) => {
  const num = notas.length;

  if (num == 0) {
    console.log("Informe, no mínimo uma nota.");
    return;
  }
  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }
  const media = soma / num;
  console.log(`Média: ${media.toFixed(2)}`);
};

calcularMedia(6, 7, 9);
calcularMedia(2, 10);
calcularMedia(7.5, 8, 10, 9.5);
calcularMedia();
