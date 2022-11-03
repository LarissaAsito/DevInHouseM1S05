export default class Funcionario {
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

    testaCPF(cpf) {
        var soma;
        var resto;
        soma = 0;
        cpf = cpf.trim();
        cpf = cpf.replaceAll('.', '');
        cpf = cpf.replace('-', '');
        if (cpf == "00000000000") return false;
        
        for (let i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(cpf.substring(9, 10)) ) return false;
    
        soma = 0;
        for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
    
        if ((resto == 10) || (resto == 11))  resto = 0;
        if (resto != parseInt(cpf.substring(10, 11) ) ) return false;
        return true;
    }
}