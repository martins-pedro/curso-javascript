function dollarToReal(valorDollar, cotacaoReal) {
  let valorConvertido = valorDollar * cotacaoReal;
  console.log(valorConvertido.toFixed(2));
}

let dollar = 320;
let real = 4.92;

dollarToReal(dollar, real);
