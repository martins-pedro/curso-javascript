//exercicio 1: imprimir ola mundo no console
console.log("Olá, mundo!");

//EX 2 CONVERSAO DE TIPOS: dado uma string "1234" converta em numero e exiba no console
let string = "1234";
let stringNumber = Number(string);
console.log(typeof stringNumber);
console.log(stringNumber);

// EX 3; Manipulação Strings
//Dado um string 'JavaScript é incrível' quantos códigos caracteres tem e quantas palavras ha na frase

let js = "Javascript é incrível";
let palavras = 1;

//Este foi o jeito em que eu pensei:
// for (i = 0; i < js.length; i++) {
//   if (js[i] === " ") {
//     palavras++;
//   }
// }
// console.log(js.length);
// console.log(palavras);
//Este meu jeito, provavelmente teria que ser criado validações
//Pois dependendo do sistema poderia não haver nenhuma palavra
//E ele mostraria que teria 1, pelo contador de palavras começar em 1

//Jeito que o professor ensinou no curso + eficiente
let jsPalavras = js.split(" ").length;
console.log(jsPalavras);

//EXERCICIO 4: LOOPS E ARRAYS
// CRIE UM ARRAY COM 5 NOMES, USE UM LOOP PARA IMPRIMIR CADA NOME NO CONSOLE
let pessoas = ["Pedro", "Giovanna", "Perola", "José", "Maria"];

for (let j = 0; j < pessoas.length; j++) {
  console.log(pessoas[j]);
}

//EXERCICIO 5: FUNÇÕES, STRINGS E MATH
//Crie uma função que aceita uma string representando um horário no formato de 24h
//A função deve retornar uma string que converta o formato do horário em 12h
//Use o objeto Math para aux neste conversão
//Certifique que ela lide corretamente com horarios da meia-noite e meio-dia

function clock() {
  let tempo = new Date();
  let hora = tempo.getHours();
  let minuto = tempo.getMinutes();

  if (hora < 10) hora = "0" + hora;

  let temp = hora > 12 ? hora - 12 : hora;
  temp += (minuto < 10 ? ":0" : ":") + minuto;

  temp += hora >= 12 ? " P.M." : " A.M.";

  console.log(temp);
}
clock();
