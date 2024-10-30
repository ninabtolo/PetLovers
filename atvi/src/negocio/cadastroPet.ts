
import Pet from "../modelo/pet";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class CadastroPet {
    private entrada: Entrada;
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        this.entrada = new Entrada();
        this.cliente = cliente;
    }

    public cadastrarPet(): void {
        console.log(`\nInício do cadastro de pet para o cliente ${this.cliente.nome}`);
        let nome = this.entrada.receberTexto(`Informe o nome do pet: `);
        let tipo = this.entrada.receberTexto(`Informe o tipo do pet: `);
        let raca = this.entrada.receberTexto(`Informe a raça do pet: `);
        let genero = this.entrada.receberTexto(`Informe o gênero do pet: `);

        let pet = new Pet(nome, raca, genero, tipo);
        // Chama o método correto para adicionar o pet ao cliente
        this.cliente.adicionarPet(pet);
        console.log(`\nPet cadastrado com sucesso para o cliente ${this.cliente.nome}!`);
    }
}
