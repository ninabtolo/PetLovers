import Cliente from "../modelo/cliente";

export default class ListagemProdutosConsumidos {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista geral dos produtos consumidos por cada cliente:`);

        this.clientes.forEach(cliente => {
            console.log(`\nCliente: ${cliente.nome}`);
            if (cliente.getProdutosConsumidos.length > 0) {
                cliente.getProdutosConsumidos.forEach(produto => {
                    console.log(`- Produto consumido: ${produto.nome}`);
                });
            } else {
                console.log("Nenhum produto consumido.");
            }
        });
    }
}
