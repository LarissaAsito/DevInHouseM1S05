export default class Time {
    constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos){
        this.nome = nome;
        this.sigla = sigla;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.empates = empates;
        this.golsMarcados = golsMarcados;
        this.golsSofridos = golsSofridos;
    }
    get numeroDeJogos() {
        return this.vitorias + this.derrotas + this.empates;
    }
    get numeroDePontos() {
        return (this.vitorias*3) + this.empates;
    }
}