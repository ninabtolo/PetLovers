import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Exclusao from "./exclusao";

export default class ExclusaoProduto extends Exclusao {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log(`\nInício da remoção do produto`);
        let nomeProduto = this.entrada.receberTexto(`Informe o nome do produto a ser removido: `);
        let index = this.produtos.findIndex(p => p.nome === nomeProduto);

        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`\nProduto removido com sucesso!`);
        } else {
            console.log(`\nProduto não encontrado.`);
        }
    }
}
