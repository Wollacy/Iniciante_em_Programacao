const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    dependentes: [
        {
            nome: "Sara",
            parentesco: "filha",
            dataNascimento: "20/03/2011"
        },
        {
            nome: "Sara",
            parentesco: "filha",
            dataNascimento: "20/03/2011"
        }
    ],
    saldo: 100,

    depositar:function(valor){
        this.saldo += valor;
    }
}

console.log(`R$ ${cliente.saldo.toFixed(2)}`);

cliente.depositar(30);

console.log(`R$ ${cliente.saldo.toFixed(2)}`);
