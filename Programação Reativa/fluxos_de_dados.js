// 1. Streams/Observables (Fluxos de dados):



// Analogia: Uma torneira de dados que pode ser aberta/fechada
//           Você coloca baldes (subscribers) para coletar água

// Exemplo com RxJS (biblioteca reativa)
import { fromEvent, interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

// Stream de cliques
const clicks$ = fromEvent(document, 'click');

// Stream que emite números a cada segundo
const numeros$ = interval(1000);

// Você "escuta" (subscribe) esses streams
const subscription = numeros$.subscribe(numero => {
    console.log(`Número: ${numero}`);
});

// Depois de 5 segundos, para de escutar
setTimeout(() => {
    subscription.unsubscribe();
}, 5000);