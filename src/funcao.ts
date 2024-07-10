// É preciso dizer a tipagem dos parâmetros e também a tipagem do retorno da função

function soma (a: number, b: number): number {
    return a + b
}

const cumprimentar = (nome: string): string => {
    return `Olá, ${nome}` 
}

// VOid pode ser usado em situações como essa onde não retorno e apenas já mostro direto no console.log
const cumprimentar2 = (nome: string): void => {
    console.log(cumprimentar2("VOIDE"));
}

console.log(soma(10, 10));
console.log(cumprimentar("Guilherme"));