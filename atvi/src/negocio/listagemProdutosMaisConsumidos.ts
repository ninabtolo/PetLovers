import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";

export default class ListagemProdutosMaisConsumidos {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos produtos mais consumidos:`);

        let consumoProdutos = new Map<string, number>();

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                consumoProdutos.set(produto.nome, (consumoProdutos.get(produto.nome) || 0) + 1);
            });
        });

        let produtosOrdenados = Array.from(consumoProdutos.entries()).sort((a, b) => b[1] - a[1]);

        produtosOrdenados.forEach(([nome, quantidade]) => {
            console.log(`${nome}: ${quantidade} vezes consumido`);
        });
    }
}
