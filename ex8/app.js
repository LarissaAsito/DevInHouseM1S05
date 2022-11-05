import Usuario from "./Usuario.js";

const user1 = new Usuario('Larissa', 'larissa@gmail.com', '123');

const autenticarForm = (evento) => {
    evento.preventDefault();
    const email = evento.target.email.value;
    const senha = evento.target.senha.value;
    if (user1.autenticar(email, senha)) {
        document.getElementById('alerta').innerText = 'Autenticado';
        //console.log('Autenticado');
    } else {
        document.getElementById('alerta').innerText = 'Não autenticado';
        //console.log('Não autenticado');
    }
}

const formAut = document.getElementById('formAut');
formAut.addEventListener('submit', autenticarForm);