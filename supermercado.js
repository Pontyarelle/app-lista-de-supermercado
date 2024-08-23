var items = [];
function renderListaProdutos() {
    let listaProdutos = document.querySelector('.lista-produtos'); 
    let soma = 0;
    listaProdutos.innerHTML = "";

    items.forEach((item, index) => {
        soma += parseFloat(item.valor);
        listaProdutos.innerHTML += `
        <div class="lista-produtos-single">
            <h3>${item.nome}</h3>
            <h3 class="price-produto"><span>R$ ${item.valor}</span></h3>
            <button class="btn-excluir" data-index="${index}"><i class="fa fa-trash"></i></button>
        </div>
        `;
    });

    // Atualizar o total e o contador de itens
    soma = soma.toFixed(2);
    document.querySelector('.soma-produto h1').innerHTML = `Total: R$ ${soma}`;
    document.querySelector('.soma-produto h2').innerHTML = `Itens: ${items.length}`;
}

document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    if (nomeProduto.value && precoProduto.value) {
        items.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });

        nomeProduto.value = "";
        precoProduto.value = "";

        renderListaProdutos();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = [];
    renderListaProdutos();
});

document.querySelector('.lista-produtos').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-excluir') || event.target.closest('.btn-excluir')) {
        let index = event.target.getAttribute('data-index');
        items.splice(index, 1);
        renderListaProdutos();
    }
});
