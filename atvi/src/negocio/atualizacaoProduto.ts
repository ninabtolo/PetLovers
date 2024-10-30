import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Atualizar from "./atualizacao";
import Atualizacao from "./atualizacao";

export default class AtualizarProduto extends Atualizacao {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nInício da atualização de produto`);
        let nomeProduto = this.entrada.receberTexto(`Informe o nome do produto a ser atualizado: `);
        let produto = this.produtos.find(p => p.nome === nomeProduto);
    
        if (produto) {
            let novoNome = this.entrada.receberTexto(`Informe o novo nome do produto (deixe vazio para manter o atual): `);
            if (novoNome) produto.nome = novoNome;
    
            let novoPreco = this.entrada.receberNumero(`Informe o novo preço do produto (deixe vazio para manter o atual): `);
            if (!isNaN(novoPreco)) produto.preco = novoPreco;
    
            console.log(`\nProduto atualizado com sucesso!`);
        } else {
            console.log(`\nProduto não encontrado.`);
        }
    }
    
}
