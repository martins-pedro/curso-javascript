let cor = document.getElementById("texto").value
let body = document.getElementsByTagName("body")


function trocarCor() {
    let cor = document.getElementById("texto").value
    let body = document.getElementsByTagName("body")

    cor = cor.toLowerCase()

    switch (cor) {
        case "azul":
            document.getElementById("erro").innerHTML = "Background alterado para AZUL"
            document.body.style.backgroundColor = "blue"
            break;
        
        case "vermelho":
            document.getElementById("erro").innerHTML = "Background alterado para VERMELHO"
            document.body.style.backgroundColor = "red"
            break;
                
        case "verde":
            document.getElementById("erro").innerHTML = "Background alterado para VERDE"
            document.body.style.backgroundColor = "green"
            break;

        default:
            document.getElementById("erro").innerHTML = "ESSA COR NÃO ESTÁ DISPONÍVEL"
            break;
    }
}
