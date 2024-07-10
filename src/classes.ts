// mexendo com class e Modificadores de acesso
// Modificadores de acesso "public" || "private"
// O private faz com que só possa ser usado dentro daquele escopo

class User {
    public nome: string;
    public age: number;
    private saldoBancario: number;

    constructor(nome: string, age: number,) {
        this.nome = nome;
        this.age = age;
        this.saldoBancario = 0;
        console.log("nova instância criada!");
    };

    // Exemplo de utilização dentro do escopo
    soma() {
        this.validaSaldo(this.saldoBancario)
    };
    private validaSaldo(saldo: number){

    };
};

const usuario = new User("Guimas", 19);



