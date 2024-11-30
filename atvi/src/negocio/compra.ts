import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Entrada from "../io/entrada";

export default class Compra {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public registrarCompra(): void {
        console.log("\nRegistro de Compra");

        let cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente: ");
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpfCliente);

        if (!cliente) {
            console.log("\nCliente não encontrado.");
            return;
        }

        let tipo = this.entrada.receberTexto("Deseja registrar um Produto (P) ou Serviço (S)? ").toUpperCase();

        if (tipo === "P") {
            this.comprarProduto(cliente);
        } else if (tipo === "S") {
            this.contratarServico(cliente);
        } else {
            console.log("\nOpção inválida. Operação cancelada.");
        }
    }

    private comprarProduto(cliente: Cliente): void {
        console.log("\nProdutos disponíveis:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
        });
    
        let opcao = this.entrada.receberNumero("Escolha o número do produto: ");
        let produto = this.produtos[opcao - 1];
    
        if (produto) {
            let quantidade = this.entrada.receberNumero(`Informe a quantidade de "${produto.nome}" a ser comprada: `);
            for (let i = 0; i < quantidade; i++) {
                cliente.adicionarProdutoConsumido(produto); 
            }
            console.log(`\nCompra de ${quantidade} unidade(s) do produto "${produto.nome}" registrada com sucesso!`);
        } else {
            console.log("\nProduto não encontrado. Operação cancelada.");
        }
    }
    
    private contratarServico(cliente: Cliente): void {
        console.log("\nServiços disponíveis:");
        this.servicos.forEach((servico, index) => {
            console.log(`${index + 1}. ${servico.nome} - R$ ${servico.preco.toFixed(2)}`);
        });
    
        let opcao = this.entrada.receberNumero("Escolha o número do serviço: ");
        let servico = this.servicos[opcao - 1];
    
        if (servico) {
            cliente.adicionarServicoConsumido(servico);
            console.log(`\nServiço "${servico.nome}" registrado com sucesso!`);
        } else {
            console.log("\nServiço não encontrado. Operação cancelada.");
        }
    }
}    