function Cachorro(nome) {
    this.nome = nome;
}

function Animal( nome, raça, preço) {
    this.raça = raça;

    let _preço = preço;

    this.getPreço = function() {
        return _preço;
    }

    this.setPreço = function(valor) {
        if (typeof valor === 'number') {
            _preço = valor;
        }
    }

    this.taxa = function (){
        const novoPreço = _preço * 1.2;
        _preço = novoPreço;
    }

    Cachorro.call(this, nome);
}

function Gato(nome) {
    Animal.call(this, nome, "Gato", 2000)

    this.taxa = function (){
        const novoPreço = this.getPreço() * 1.04;
        this.setPreço(novoPreço);
    }
}

function Passaro(nome) {
    Animal.call(this, nome, "Passaro", 3000)

    this.taxa = function (){
        const novoPreço = this.getPreço() * 1.25;
        this.setPreço(novoPreço);
    }
}

const raça1 = new Animal("Cachorro", "caramelo", 1000);
const raça2 = new Gato("Gato");
const raça3 = new Passaro("Passaro");

raça1.taxa();
console.log(raça1.getPreço());

raça2.taxa();
console.log(raça2.getPreço());

raça3.taxa();
console.log(raça3.getPreço());