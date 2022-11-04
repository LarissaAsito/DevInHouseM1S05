import Juros from "./Juros.js";

//Juros simples e composto para uma aplicação de 10.000 reais 
//a uma taxa de 7% ao mês (ou seja, 0.07) pelo período de 24 meses.
const app1 = new Juros(10000, 0.07, 24);
console.log(`Juros simples: ${app1.calcularJurosSimples()}`);
console.log(`Juros composto: ${app1.calcularJurosCompostos()}`);

//Juros simples e composto para uma aplicação de 10.000 reais 
//a uma taxa de 15% ao ano (ou seja, 0.15) pelo período de 10 anos.
const app2 = new Juros(10000, 0.15, 10);
console.log(`Juros simples: ${app2.calcularJurosSimples()}`);
console.log(`Juros composto: ${app2.calcularJurosCompostos()}`);