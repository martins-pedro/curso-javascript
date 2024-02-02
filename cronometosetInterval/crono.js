function startClock() {
    tempo = setInterval(function() {
        var crono = document.getElementById("tempo").innerHTML
        var soma = parseInt(crono) + 1
        document.getElementById("tempo").innerHTML = soma
    }, 1000);
}

function stopClock() {
    clearInterval(tempo)
}