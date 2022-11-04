export default class Personagem {
    nome 
    percentualVida

    constructor (nome) {
        this.nome = nome;
        this.percentualVida = 100;
    }

    sofreuDano(percentualDano) {
        if (this.percentualVida < percentualDano) {
            this.percentualVida = 0;
        } else {
            this.percentualVida -= percentualDano;
        }
    }

    usouKitMedico() {
        if (this.percentualVida > 90) {
            this.percentualVida = 100;
        } else {
            this.percentualVida += 10;
        }
    }
}