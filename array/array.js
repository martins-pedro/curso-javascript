const teste = ["teste", "pedro", "martins", "ultimo item"];

//pega o ultimo item
console.log(teste[teste.length - 1])

//Mostra quantos itens tem no array
console.log(teste.length)

//Converte toda a array em uma só string e cada item é separado por uma vírgula
console.log(teste.toString())

//adicionando um novo elemento a array
teste.push("newElement")
console.log(teste)

//pode ser adicionado com a propriedade .length NÃO É MUITO INIDICADO, POIS PODE ACABAR CRIANDO "BURACOS" NO ARRAY
teste[teste.length] = "zOtherNewElement"
console.log(teste.toString())

//NOVO METODO DE PEGAR O ULTIMO ITEM NO ARRAY
console.log(teste.at(-1))

//Converte a array em string e adiciona um separador especifico para os itens
console.log(teste.join(" + "))

//ordena alfabatecamente
console.log(teste.sort())
