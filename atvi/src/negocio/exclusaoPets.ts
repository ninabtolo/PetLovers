import Pet from "../modelo/pet";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Exclusao from "./exclusao";

export default class ExclusaoPet extends Exclusao {
    private cliente: Cliente;
    private entrada: Entrada;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log(`\nInício da remoção de pet para o cliente ${this.cliente.nome}`);
        let nomePet = this.entrada.receberTexto(`Informe o nome do pet a ser removido: `);
        let index = this.cliente.getPets.findIndex(p => p.getNome === nomePet);

        if (index !== -1) {
            this.cliente.getPets.splice(index, 1);
            console.log(`\nPet removido com sucesso!`);
        } else {
            console.log(`\nPet não encontrado.`);
        }
    }
}
