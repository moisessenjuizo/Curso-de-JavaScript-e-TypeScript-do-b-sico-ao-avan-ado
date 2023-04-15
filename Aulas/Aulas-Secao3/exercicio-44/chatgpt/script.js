const calcularIMC = (peso, altura) => {
  const imc = peso / (altura ** 2);
  return imc;
};

const faixaPeso = (imc) => {
  if (imc < 18.5) {
    return "abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "com peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "com sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    return "com obesidade grau I";
  } else if (imc >= 35 && imc < 40) {
    return "com obesidade grau II";
  } else {
    return "com obesidade grau III";
  }
};

const exibirResultado = () => {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value) / 100;

  const imc = calcularIMC(peso, altura);
  const faixa = faixaPeso(imc);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está ${faixa}.`;
};

const botaoCalcular = document.getElementById("calcular");
botaoCalcular.addEventListener("click", exibirResultado);
