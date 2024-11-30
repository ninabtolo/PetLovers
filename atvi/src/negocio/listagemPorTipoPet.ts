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

        let consumoPorTipoRaca = new Map<string, Map<string, number>>();

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                let chaveTipo = pet.getTipo;
                let chaveRaca = pet.getRaca;

                if (!consumoPorTipoRaca.has(chaveTipo)) {
                    consumoPorTipoRaca.set(chaveTipo, new Map<string, number>());
                }

                let consumoPorRaca = consumoPorTipoRaca.get(chaveTipo);

                if (consumoPorRaca) {
                    
                    cliente.getProdutosConsumidos.forEach(produto => {
                        consumoPorRaca.set(produto.nome, (consumoPorRaca.get(produto.nome) || 0) + 1);
                    });

                    cliente.getServicosConsumidos.forEach(servico => {
                        consumoPorRaca.set(servico.nome, (consumoPorRaca.get(servico.nome) || 0) + 1);
                    });
                }
            });
        });

        consumoPorTipoRaca.forEach((consumoPorRaca, tipoPet) => {
            console.log(`\nTipo de Pet: ${tipoPet}`);
            consumoPorRaca.forEach((quantidade, nome) => {
                console.log(`- Raça/Serviço/Produto: ${nome}: ${quantidade} vezes consumido`);
            });
        });
    }
}
