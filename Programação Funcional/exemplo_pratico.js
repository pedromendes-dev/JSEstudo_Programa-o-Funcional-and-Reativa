 // EXEMPLO PRÁTICO: Carrinho de Compras Funcional

 
 // Dados imutáveis
const carrinho = {
    itens: [
        { nome: "Camiseta", preco: 50, quantidade: 2 },
        { nome: "Calça", preco: 100, quantidade: 1 },
        { nome: "Tênis", preco: 200, quantidade: 1 }
    ],
    desconto: 10 // 10%
};

// Funções puras
const calcularSubtotal = itens =>
    itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);

const aplicarDesconto = (total, desconto) =>
    total * (1 - desconto / 100);

const formatarMoeda = valor =>
    `R$ ${valor.toFixed(2)}`;

// Pipeline funcional
const totalCarrinho = (carrinho) => {
    const subtotal = calcularSubtotal(carrinho.itens);
    const comDesconto = aplicarDesconto(subtotal, carrinho.desconto);
    return formatarMoeda(comDesconto);
};

console.log(totalCarrinho(carrinho));  // R$ 378.00