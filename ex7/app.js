import Time from "./Time.js";
import Partida from "./Partida.js";

const cor = new Time("Corinthians", "COR");
const bau = new Time("Bauru", "BAU");

const p1 = new Partida("COR", 0, "BAU", 0);
const p2 = new Partida("PAL", 0, "SAO", 0);
const p3 = new Partida("COR", 3, "PAL", 2);
const p4 = new Partida("BAU", 1, "SAO", 2);

cor.computarPartida(p1);
bau.computarPartida(p1);
cor.computarPartida(p2);
bau.computarPartida(p2);
cor.computarPartida(p3);
bau.computarPartida(p3);
cor.computarPartida(p4);
bau.computarPartida(p4);

console.log(cor, bau);

/*console.log({
    jogosCor: cor.numeroDeJogos,
    pontosCor: cor.numeroDePontos,
    jogosBau: bau.numeroDeJogos,
    pontosBau: bau.numeroDePontos
})*/

cor.exibirSituacao()
bau.exibirSituacao()