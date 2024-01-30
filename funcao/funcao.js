let getReal = document.getElementById("valorReal");
let getCotacao = document.getElementById("cotacao");
let resultado = document.getElementById("resultado");
let valorConvertido;

function realToDollar() {
  let real = getReal.value;
  let cotacao = getCotacao.value;
  valorConvertido = real / cotacao;

  resultado.innerHTML =
    "R$" +
    real +
    " reais convertidos é igual à $" +
    valorConvertido.toFixed(2) +
    " dollares";
}
