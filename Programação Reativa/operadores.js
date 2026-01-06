// 2. Operadores (Transformam streams):


// Pipe pattern: encadeamento de operadores
numeros$
    .pipe(
        filter(n => n % 2 === 0),      // Só números pares
        map(n => n * 10),              // Multiplica por 10
        take(5)                        // Pega apenas 5 valores
    )
    .subscribe(valor => {
        console.log(`Valor: ${valor}`);
    });
// Saída: 0, 20, 40, 60, 80