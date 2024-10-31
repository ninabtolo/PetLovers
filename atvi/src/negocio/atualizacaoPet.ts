import Pet from "../modelo/pet";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizacao from "./atualizacao";

export default class AtualizarPet extends Atualizacao {
    private cliente: Cliente;
    private entrada: Entrada;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nInício da atualização de pet para o cliente ${this.cliente.nome}`);
        let nomePet = this.entrada.receberTexto(`Informe o nome do pet a ser atualizado: `);
        let pet = this.cliente.getPets.find(p => p.getNome === nomePet);

        if (pet) {
            let novoNome = this.entrada.receberTexto(`Informe o novo nome do pet (deixe vazio para manter o atual): `);
            if (novoNome) pet.setNome = novoNome;

            let novaRaca = this.entrada.receberTexto(`Informe a nova raça do pet (deixe vazio para manter a atual): `);
            if (novaRaca) pet.setRaca = novaRaca;

            let novoGenero = this.entrada.receberTexto(`Informe o novo gênero do pet (deixe vazio para manter o atual): `);
            if (novoGenero) pet.setGenero = novoGenero;

            let novoTipo = this.entrada.receberTexto(`Informe o novo tipo do pet (deixe vazio para manter o atual): `);
            if (novoTipo) pet.setTipo = novoTipo;

            console.log(`\nPet atualizado com sucesso!`);
        } else {
            console.log(`\nPet não encontrado.`);
        }
    }
}
