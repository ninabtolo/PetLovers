import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class ListagemPorTipoRacaDePet {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos serviços ou produtos mais consumidos por tipo e raça de pets:`);

        // Mapa para armazenar o consumo por tipo e raça de pet
        let consumoPorTipoRaca = new Map<string, Map<string, number>>();

        // Itera sobre todos os clientes
        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                let chaveTipo = pet.getTipo;
                let chaveRaca = pet.getRaca;

                // Inicializa o mapa para o tipo de pet, caso não exista
                if (!consumoPorTipoRaca.has(chaveTipo)) {
                    consumoPorTipoRaca.set(chaveTipo, new Map<string, number>());
                }

                // Pega o mapa de consumo para a raça específica
                let consumoPorRaca = consumoPorTipoRaca.get(chaveTipo);

                // Verifica se o mapa de raça está indefinido e inicializa se necessário
                if (consumoPorRaca) {
                    // Conta o consumo de produtos
                    cliente.getProdutosConsumidos.forEach(produto => {
                        consumoPorRaca.set(produto.nome, (consumoPorRaca.get(produto.nome) || 0) + 1);
                    });

                    // Conta o consumo de serviços
                    cliente.getServicosConsumidos.forEach(servico => {
                        consumoPorRaca.set(servico.nome, (consumoPorRaca.get(servico.nome) || 0) + 1);
                    });
                }
            });
        });

        // Exibe os resultados
        consumoPorTipoRaca.forEach((consumoPorRaca, tipoPet) => {
            console.log(`\nTipo de Pet: ${tipoPet}`);
            consumoPorRaca.forEach((quantidade, nome) => {
                console.log(`- Raça/Serviço/Produto: ${nome}: ${quantidade} vezes consumido`);
            });
        });
    }
}
