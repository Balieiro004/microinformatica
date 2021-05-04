//let nome = 'Anderson';
//let estudante = true;
//let idade = 30;

// criando um objeto 

//let pessoa: new Object() //isso aqui...
//let pessoa = {} // É exatamente igual a isso aqui. Objeto leteral
//pessoa.nome = 'Anderson';
//pessoa.idade = 30;
//pessoa.estudante = true;

let pessoa = {
    nome: 'Anderson',
    idade: new Date(1990,8, 25),
    estudande: true,
    formacao: {
        curso: 'Administração',
        instituição: 'Uniara'
    },
    falarOi() {
        alert(`Oi, meu nome é ${this.nome}!`);
    },
    idiomas: ['portugues', 'inglês', 'espanhol'] //esto é um array dentro do objeto
}


let meses = ['janeiro', 'fevereiro', 'março']; //array

alert(meses.length) // conta quantos messes tem dentro do array

