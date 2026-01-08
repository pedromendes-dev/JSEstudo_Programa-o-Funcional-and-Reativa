import React from 'react'

export default function Componente(props: any) {
    return (
        <div className="flex items-center">
            <span className="text-2xl">
               Conteúdo 
            </span>
        </div>
    );
}


// Quando você cria uma função ela vai gerar a tag JSX '<Componente />' com o nome da função (Componente(props: any))
// É essa a forma que o React entende que você quer renderizar um componente
// Você instancia e criar um componente através da sintaxe do react


/*
// Export:
export function Componente(props: any) { }
// Importar:
import { Componente } from './teste'
*/


/* 
A palavra default indica que essa é a exportação padrão do arquivo.
. É a exportação principal do arquivo
. Só pode ter uma por arquivo
. Ao importar, você não precisa usar chaves {}
. Pode importar com qualquer nome
*/