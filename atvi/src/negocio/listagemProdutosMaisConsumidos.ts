import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";

export default class ListagemProdutosMaisConsumidos {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos produtos mais consumidos:`);

        // Cria um mapa para armazenar o consumo de cada produto
        let consumoProdutos = new Map<string, number>();

        // Itera sobre todos os clientes e conta o consumo de cada produto
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                consumoProdutos.set(produto.nome, (consumoProdutos.get(produto.nome) || 0) + 1);
            });
        });

        // Converte o mapa em uma lista e ordena os produtos pelo número de vezes consumido
        let produtosOrdenados = Array.from(consumoProdutos.entries()).sort((a, b) => b[1] - a[1]);

        // Exibe os produtos e a quantidade de vezes consumido
        produtosOrdenados.forEach(([nome, quantidade]) => {
            console.log(`${nome}: ${quantidade} vezes consumido`);
        });
    }
}
