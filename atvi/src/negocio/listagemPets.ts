import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class listagemPets extends Listagem {
    private pets: Array<Pet>;

    constructor(pets: Array<Pet>) {
        super();
        this.pets = pets;
    }

    public listar(): void {
        console.log(`\nLista de todos os Pets:`);
        this.pets.forEach(pet => {
            console.log(`Nome: ${pet.getNome}`);
        });
    }
}
