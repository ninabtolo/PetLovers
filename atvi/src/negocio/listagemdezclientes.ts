import Cliente from "../modelo/cliente";

export default class ListagemTopClientesPorQuantidade {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos ou serviços (em quantidade):`);

        let clientesOrdenados = this.clientes.slice().sort((a, b) => {
            let totalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            let totalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return totalB - totalA; 
        });

        clientesOrdenados.slice(0, 10).forEach((cliente, index) => {
            let totalConsumido = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            console.log(`${index + 1}. ${cliente.nome}: ${totalConsumido} itens consumidos`);
        });
    }
}
