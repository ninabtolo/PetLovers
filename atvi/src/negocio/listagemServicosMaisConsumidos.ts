import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

export default class ListagemServicosMaisConsumidos {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos serviços mais consumidos:`);

        let consumoServicos = new Map<string, number>();

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                consumoServicos.set(servico.nome, (consumoServicos.get(servico.nome) || 0) + 1);
            });
        });

        let servicosOrdenados = Array.from(consumoServicos.entries()).sort((a, b) => b[1] - a[1]);

        servicosOrdenados.forEach(([nome, quantidade]) => {
            console.log(`${nome}: ${quantidade} vezes consumido`);
        });
    }
}
