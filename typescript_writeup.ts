// Typescript è un'estensione di Javascript che permette la tipizzazione del linguaggio. JS è un linguaggio dinamicamente tipizzato, ovvero che non fa differenza fra i vari tipi quando assegni valori a una variabile o li riassegni più volte

// let a = 2 // numero
// a = 'pepe' // stringa

// console.log(a)  sarà "pepe"

// Questo non è possibile con TypeScript, lui capisce JS e quindi tutti i tipi primitivi, ma puoi anche decidere di specificarlo tu a monte

// let a = 2 // numero
// a = 'pepe' // errore, a è di tipo numero

// let a :number // specificazione del tipo
// a = 'pepe'  // errore, a è di tipo numero

// Typescript ha bisogno di essere compilato in un file JS per essere capito dal browser, che capisce solo javascript, per quello si usa il Typescript compiler (TSC), scrivendo da terminale tsc <.ts filepath> (one time), o tsc <.ts filepath> -w (watch mode, aggiorna il file JS a ogni salvataggio)

// Perchè rendere JS un linguaggio tipizzato? Specificare il tipo può servire a prevenire bug e in generale a inrobustire il codice e renderlo più facile da capire per altri, in quanto la definizione di funzioni e variabili avranno un comportamento prevedibile anche prima che vengano fatte delle prove con parametri/valori reali. Inoltre a livello della scrittura del codice Typescript avverte immediatamente quando esistono incongruenze di tipo nel codice.

// function sum(num1: number, num2: number): string {
//   return `La somma è ${num1 + num2}!}`;
// } // sappiamo che è una funzione che prende due parametri number e ritorna un parametro stringa

// Typescript supporta tutti i tipi primitivi di JS, ma per tipi più complessi  oggetti bisogna definire una classe o un'interface

// class Skill {
//     name: string
//     power: number
//     constructor (name, power) {
//         this.name = name
//         this.power = power
//     }
// }

// interface Pokemon {
//     name: string
//     description: string
//     height: number
//     moves: Skill[]
// }

// altri tipi supportati da TS ma non presenti in JS sono:
// 1) any // l'espressione accetta qualsiasi tipo
// 2) never // l'espressione ritornerà sempre un errore, diverso da undefined o void che invece ritornano undefined
// 3) tuple // una sorta di array pre-definito come length e tipi usati:

// let tuple :[string, number, Skill[]]

// 4) union // semplicemente l'unione di due o più tipi, significa che tutti i tipi inclusi sono accettati dall'espressione

// let unionVar :string | number | null

// I generics in typescript permettono di non assegnare un tipo finchè l'espressione non viene letta. Si differenziano dal tipo any poichè any non specifica il tipo (accetta qualsiasi valore) e non tiene traccia del tipo che viene usato dall'espressione a differenza dei generics

// interface User<Type> {
//   name: string;
//   age: number;
//   favourite_drink: Type;
// }

// const pepe: User<string> = {
//   name: "pepe",
//   age: 69,
//   favourite_drink: "water",
// };


// const plofi: User<{
//   name: string;
//   from: string;
// }> = {
//     name: "plofi",
//     age: 31,
//     favourite_drink: {
//         name: 'Jägermeister',
//         from: 'supermercato'
//     }
// };

// function briccoli<Type>(example: Type): Type {
//     return example;
//   }

// let variable = briccoli('pepe') // Type sarà string
// variable = briccoli(123) // Type sarà number