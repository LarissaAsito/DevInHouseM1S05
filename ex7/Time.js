export default class Time {
    vitorias = 0
    derrotas = 0
    empates = 0
    golsMarcados = 0
    golsSofridos = 0
    constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos){
        this.nome = nome;
        this.sigla = sigla;
    }
    get numeroDeJogos() {
        return this.vitorias + this.derrotas + this.empates;
    }
    get numeroDePontos() {
        return (this.vitorias*3) + this.empates;
    }

    computarPartida(p) {
        let golsMarcados = 0;
        let golsSofridos = 0;
        if (p.siglaTimeA === this.sigla) {
            golsMarcados = p.golsTimeA
            golsSofridos = p.golsTimeB
        } else if (p.siglaTimeB === this.sigla) {
            golsMarcados = p.golsTimeB
            golsSofridos = p.golsTimeA
        } else {
            return //interrompe a execução
        }

        this.golsMarcados += golsMarcados
        this.golsSofridos += golsSofridos

        this.empates += golsMarcados === golsSofridos ? 1 : 0
        this.vitorias += golsMarcados > golsSofridos ? 1 : 0 
        this.derrotas += golsMarcados < golsSofridos ? 1 : 0

    }

    exibirSituacao() {
        console.log(`Time: ${this.nome} (${this.sigla})`)
        console.log(`Vitorias: ${this.vitorias}`)
        console.log(`Derrotas: ${this.derrotas}`)
        console.log(`Empates: ${this.empates}`)
        console.log(`Gols marcados: ${this.golsMarcados}`)
        console.log(`Gols sofridos: ${this.golsSofridos}`)
    }
}