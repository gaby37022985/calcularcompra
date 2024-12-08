// script.js
function calcularCompra(produto, numParcelas) {
    const precoOriginal = produto.preco;

    if (numParcelas === 0) {
        const desconto = precoOriginal * 0.10;
        const precoFinal = precoOriginal - desconto;
        return `Compra à vista. Valor com desconto: R$ ${precoFinal.toFixed(2)}`;
    } else if (numParcelas >= 1 && numParcelas <= 10) {
        const valorParcela = precoOriginal / numParcelas;
        return `Compra parcelada em ${numParcelas}x sem juros. Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`;
    } else if (numParcelas >= 11 && numParcelas <= 12) {
        const juros = precoOriginal * 0.02;
        const precoComJuros = precoOriginal + juros;
        const valorParcela = precoComJuros / numParcelas;
        return `Compra parcelada em ${numParcelas}x com juros. Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`;
    } else {
        return "Número de parcelas não permitido. Escolha até 12 parcelas.";
    }
}

// Manipulação do formulário
document.getElementById("compraForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeProduto = document.getElementById("nomeProduto").value;
    const precoProduto = parseFloat(document.getElementById("precoProduto").value);
    const numParcelas = parseInt(document.getElementById("parcelas").value);

    if (!nomeProduto || isNaN(precoProduto) || isNaN(numParcelas)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const produto = { nome: nomeProduto, preco: precoProduto };
    const resultado = calcularCompra(produto, numParcelas);

    document.getElementById("resultado").innerText = resultado;
});

