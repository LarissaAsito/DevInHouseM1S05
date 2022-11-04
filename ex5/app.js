import CalculadoraDeArea from "./CalculadoraDeArea.js";
const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28

const trianguloTeste = new CalculadoraDeArea("triangulo", 6, 8);
const areaTrianguloTeste = trianguloTeste.calcular();
console.log(areaTrianguloTeste); 

const quadradoTeste = new CalculadoraDeArea("quadrado", 4, 4);
const areaQuadradoTeste = quadradoTeste.calcular();
console.log(areaQuadradoTeste);

const retanguloTeste = new CalculadoraDeArea("quadrado", 4, 6);
const areaRetanguloTeste = retanguloTeste.calcular();
console.log(areaRetanguloTeste);