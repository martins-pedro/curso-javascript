class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    buzina() {return this.modelo + " Buzinou: Biiiii"};
}

const gol = new Carro("Volkswagen", "Gol", "2011");
console.log(gol);
console.log(gol.buzina());

const onix = new Carro("Chevrolet", "Onix", "2015");
console.log(onix);
console.log(onix.buzina())