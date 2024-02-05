let d = new Date()

let year = d.getFullYear()

let mes = d.getMonth()
console.log(mes)

let mesEscrito = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mesTotal = mesEscrito[mes]



let diaEscrito = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
let diaSemana = diaEscrito[d.getDay()]
console.log(diaSemana)

