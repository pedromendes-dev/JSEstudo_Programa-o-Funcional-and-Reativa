// 1. Funções Puras:


// ❌ IMPURA (tem efeito colateral)

let total = 0;
function somarImpuro(valor) {
    total += valor;  // Modifica estado externo!
    return total;
}


// ✅ PURA (não tem efeitos colaterais)

function somarPuro(a, b) {
    return a + b;  // Só depende dos inputs
}




// Teste: sempre o mesmo resultado
console.log(somarPuro(2, 3));  // 5
console.log(somarPuro(2, 3));  // 5 (sempre!)
console.log(somarPuro(2, 3));  // 5 (sempre!)
 