class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataques = {
            "mago": " magia",
            "guerreiro": " espada",
            "monge": " artes marciais",
            "ninja": "shuriken"
        };
        console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}`);
    }
}


let heroi = new Heroi("Gandalf", 1000, "mago");
heroi.atacar();  