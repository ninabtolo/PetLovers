import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizacao from "./atualizacao";
import Atualizar from "./atualizacao";

export default class AtualizacaoCliente extends Atualizacao{
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nInício da atualização do cliente`);
        let cpf = this.entrada.receberTexto(`Informe o CPF do cliente a ser atualizado: `);
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpf);

        if (cliente) {
            let novoNome = this.entrada.receberTexto(`Informe o novo nome do cliente (deixe vazio para manter o atual): `);
            if (novoNome) cliente.nome = novoNome;

            let novoNomeSocial = this.entrada.receberTexto(`Informe o novo nome social do cliente (deixe vazio para manter o atual): `);
            if (novoNomeSocial) cliente.nomeSocial = novoNomeSocial;

            console.log(`\nCliente atualizado com sucesso!`);
        } else {
            console.log(`\nCliente não encontrado.`);
        }
    }
}
