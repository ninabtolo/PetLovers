import Cliente from "../modelo/cliente";

export default class ListagemServicosConsumidos {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista geral dos serviços consumidos por cada cliente:`);

        this.clientes.forEach(cliente => {
            console.log(`\nCliente: ${cliente.nome}`);
            if (cliente.getServicosConsumidos.length > 0) {
                cliente.getServicosConsumidos.forEach(servico => {
                    console.log(`- Serviço consumido: ${servico.nome}`);
                });
            } else {
                console.log("Nenhum serviço consumido.");
            }
        });
    }
}
