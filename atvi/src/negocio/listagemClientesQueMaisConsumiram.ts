import Cliente from "../modelo/cliente";

export default class ListagemTopClientesPorValor {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos 5 clientes que mais consumiram em valor:`);

        // Ordena os clientes com base no valor total de produtos e serviços consumidos
        let clientesOrdenados = this.clientes.slice().sort((a, b) => {
            let totalA = this.calcularValorTotalConsumido(a);
            let totalB = this.calcularValorTotalConsumido(b);
            return totalB - totalA; // Ordena em ordem decrescente pelo valor consumido
        });

        // Exibe os 5 primeiros clientes com base no valor total consumido
        clientesOrdenados.slice(0, 5).forEach((cliente, index) => {
            let valorTotal = this.calcularValorTotalConsumido(cliente);
            console.log(`${index + 1}. ${cliente.nome}: R$ ${valorTotal.toFixed(2)}`);
        });
    }

    private calcularValorTotalConsumido(cliente: Cliente): number {
        // Soma o valor dos produtos consumidos
        let totalProdutos = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0);

        // Soma o valor dos serviços consumidos
        let totalServicos = cliente.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);

        return totalProdutos + totalServicos;
    }
}
