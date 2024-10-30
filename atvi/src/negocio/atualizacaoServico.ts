import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Atualizar from "./atualizacao";
import Atualizacao from "./atualizacao";

export default class AtualizarServico extends Atualizacao {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nInício da atualização de serviço`);
        let nomeServico = this.entrada.receberTexto(`Informe o nome do serviço a ser atualizado: `);
        let servico = this.servicos.find(s => s.nome === nomeServico);
    
        if (servico) {
            let novoNome = this.entrada.receberTexto(`Informe o novo nome do serviço (deixe vazio para manter o atual): `);
            if (novoNome) servico.nome = novoNome;
    
            let novoPreco = this.entrada.receberNumero(`Informe o novo preço do serviço (deixe vazio para manter o atual): `);
            if (!isNaN(novoPreco)) servico.preco = novoPreco;
    
            console.log(`\nServiço atualizado com sucesso!`);
        } else {
            console.log(`\nServiço não encontrado.`);
        }
    }
    
}