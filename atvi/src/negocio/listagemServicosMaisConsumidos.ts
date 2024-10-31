import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";

export default class ListagemServicosMaisConsumidos {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos serviços mais consumidos:`);

        // Cria um mapa para armazenar o consumo de cada serviço
        let consumoServicos = new Map<string, number>();

        // Itera sobre todos os clientes e conta o consumo de cada serviço
        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                consumoServicos.set(servico.nome, (consumoServicos.get(servico.nome) || 0) + 1);
            });
        });

        // Converte o mapa em uma lista e ordena os serviços pelo número de vezes consumido
        let servicosOrdenados = Array.from(consumoServicos.entries()).sort((a, b) => b[1] - a[1]);

        // Exibe os serviços e a quantidade de vezes consumido
        servicosOrdenados.forEach(([nome, quantidade]) => {
            console.log(`${nome}: ${quantidade} vezes consumido`);
        });
    }
}
