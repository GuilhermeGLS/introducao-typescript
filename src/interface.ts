// É possível fazer esses "contratos" utilizando a interface
// Basicamente POO
// também é possível utilizar o type em vez de interface

// type user = {
//     name: string
//     age: number
//     maior: boolean
//     estado: "solteiro" | "casado"
// }

// ===== EXEMPLO =====
interface User {
    nome: string
    idade: number
    maior: boolean
    estado: "solteiro" | "casado"
}
let usuario: User




// Só para de dar erro quando todas as variavéis do objeto serem prenchidas 
usuario = {
    nome: "Guilherme",
    idade: 19,
    maior: true,
    estado: "solteiro"
};

const printUser = (user: User) => {
    console.log(user.nome)
    console.log(user.idade)
    console.log(user.maior)
};

printUser(usuario)