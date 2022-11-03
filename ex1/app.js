class Funcionario {
    nomeCompleto
    cpf
    salario
  
    constructor(nomeCompleto, cpf, salario) {
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.salario = salario;
    }
  
    promover(percentual) {
        this.salario = this.salario + this.salario * (percentual/100);
    }
}


const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario); // 1500