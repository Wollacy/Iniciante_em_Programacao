function comprar(){
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    comprarIngresso(tipo, qtd);
    limparCampos();
}

function comprarIngresso(tipo, qtd){
    let qtdRestante = parseInt(document.getElementById(`qtd-${tipo}`).textContent);

    if(qtd > qtdRestante){
        alert(`Quantidade solicitada ${qtd} para ${tipo} maior que a quantidade disponível ${qtdRestante}!`);
    } else {
        qtdRestante = qtdRestante - qtd;
        document.getElementById(`qtd-${tipo}`).textContent = qtdRestante;

        alert(`Compra de ${qtd} ingressos ${tipo} realizada com sucesso!`);
    }
}

function limparCampos(){
    document.getElementById("qtd").placeholder = "00";
    document.getElementById("qtd").value = "";
    document.getElementById('tipo-ingresso').value = "inferior";
}