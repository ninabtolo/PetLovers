export default class Pet {
    private nome: string;
    private tipo: string;
    private raca: string;
    private genero: string;

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
    }

    public get getNome(): string {
        return this.nome;
    }

    public set setNome(novoNome: string) {
        this.nome = novoNome;
    }

    public get getRaca(): string {
        return this.raca;
    }

    public set setRaca(novaRaca: string) {
        this.raca = novaRaca;
    }

    public get getGenero(): string {
        return this.genero;
    }

    public set setGenero(novoGenero: string) {
        this.genero = novoGenero;
    }

    public get getTipo(): string {
        return this.tipo;
    }

    public set setTipo(novoTipo: string) {
        this.tipo = novoTipo;
    }
}
