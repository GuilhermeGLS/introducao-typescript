// Tipos primitivos: number, string, boolean, ...

// no TS é possível tipar as variáveis
//======= Exemplo =========
let nome: string
nome = "Guimas"

// Caso tente atribuir um valor na qual não foi tipada o própio TS já traz um erro
//======= Exemplo ========
// nome = 50

// Também sendo possível já atribuir o conteudo da variavel
//======= Exemplo ========
let sobrenome: string = "Lima"

// Trabalhando com arrays
// para definir um array é preciso colocar "[]" depois da tipagem
//======= Exemplo ========
const frutas: string[] = [];

frutas.push("banana")
frutas.push("abacaxi")

// Definindo duplas
// Quando precisa de 2 tipos de variáveis
const pessoa: [string, number] = ["Guimas", 19]

console.log(frutas);
console.log(pessoa);

