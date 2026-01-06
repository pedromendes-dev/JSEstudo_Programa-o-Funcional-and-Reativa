// EXEMPLO PRÁTICO: Busca em Tempo Real Reativa


// Com RxJS - Busca que reage a digitação
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

const inputBusca = document.getElementById('busca');

// Cria stream de eventos de input
const input$ = fromEvent(inputBusca, 'input');

input$
    .pipe(
        // Pega o valor do input
        map(event => event.target.value),
        
        // Espera 300ms após parar de digitar
        debounceTime(300),
        
        // Só continua se valor mudou
        distinctUntilChanged(),
        
        // Cancela busca anterior se nova tecla for pressionada
        switchMap(termo => buscarProdutos(termo))
    )
    .subscribe(resultados => {
        mostrarResultados(resultados);
    });

async function buscarProdutos(termo) {
    if (!termo.trim()) return [];
    
    const resposta = await fetch(`/api/produtos?q=${termo}`);
    return await resposta.json();
}

function mostrarResultados(produtos) {
    // Atualiza UI com resultados
    console.log(`Encontrados ${produtos.length} produtos`);
}