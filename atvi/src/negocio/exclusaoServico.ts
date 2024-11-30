import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Exclusao from "./exclusao";

export default class ExclusaoServico extends Exclusao {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log(`\nInício da remoção de serviço`);
        let nomeServico = this.entrada.receberTexto(`Informe o nome do serviço a ser removido: `);
        let index = this.servicos.findIndex(s => s.nome === nomeServico);

        if (index !== -1) {
            this.servicos.splice(index, 1);
            console.log(`\nServiço removido com sucesso!`);
        } else {
            console.log(`\nServiço não encontrado.`);
        }
    }
}
