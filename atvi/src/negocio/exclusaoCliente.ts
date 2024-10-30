import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Exclusao from "./exclusao";

export default class ExclusaoCliente extends Exclusao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log(`\nInício da remoção do cliente`);
        let cpf = this.entrada.receberTexto(`Informe o CPF do cliente a ser removido: `);
        let index = this.clientes.findIndex(c => c.getCpf.getValor === cpf);

        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`\nCliente removido com sucesso!`);
        } else {
            console.log(`\nCliente não encontrado.`);
        }
    }
}
