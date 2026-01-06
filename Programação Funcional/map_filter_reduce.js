// 4. Map, Filter, Reduce (Os "3 Mosqueteiros"):


const numeros = [1, 2, 3, 4, 5];

// MAP: Transforma cada elemento
const dobrados = numeros.map(n => n * 2);  // [2, 4, 6, 8, 10]

// FILTER: Filtra elementos
const pares = numeros.filter(n => n % 2 === 0);  // [2, 4]

// REDUCE: Reduz a um valor
const soma = numeros.reduce((acc, n) => acc + n, 0);  // 15

// Encadeamento (pipeline)
const resultado = numeros
    .map(n => n * 3)        // [3, 6, 9, 12, 15]
    .filter(n => n > 10)    // [12, 15]
    .reduce((a, b) => a + b, 0);  // 27