import Cliente from "../modelo/cliente";

export default class ListagemTopClientesPorValor {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos 5 clientes que mais consumiram em valor:`);

        let clientesOrdenados = this.clientes.slice().sort((a, b) => {
            let totalA = this.calcularValorTotalConsumido(a);
            let totalB = this.calcularValorTotalConsumido(b);
            return totalB - totalA; 
        });

        clientesOrdenados.slice(0, 5).forEach((cliente, index) => {
            let valorTotal = this.calcularValorTotalConsumido(cliente);
            console.log(`${index + 1}. ${cliente.nome}: R$ ${valorTotal.toFixed(2)}`);
        });
    }

    private calcularValorTotalConsumido(cliente: Cliente): number {
        let totalProdutos = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0);

        let totalServicos = cliente.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);

        return totalProdutos + totalServicos;
    }
}
