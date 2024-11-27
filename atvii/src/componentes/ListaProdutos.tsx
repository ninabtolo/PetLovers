import React, { Component } from "react";

type Props = {
    tema: string;
};

type Produto = {
    id: number;
    nome: string;
    preco: number;
    consumo: number;
};

type State = {
    produtos: Produto[];
    produtoAtual: Produto | null;  
    editando: boolean;
};

export default class ListaProdutos extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            produtos: [
                { id: 1, nome: "Produto 1", preco: 19.99, consumo: 120 },
                { id: 2, nome: "Produto 2", preco: 24.99, consumo: 95 },
                { id: 3, nome: "Produto 3", preco: 9.99, consumo: 75 },
            ],
            editando: false,
            produtoAtual: null,  
        };
    }

    abrirEditar(produto: Produto) {
        this.setState({ produtoAtual: produto, editando: true });
    }

    salvarAlteracoes = () => {
        const { produtos, produtoAtual } = this.state;
        if (produtoAtual) {
            const novosProdutos = produtos.map((produto) =>
                produto.id === produtoAtual.id ? produtoAtual : produto
            );
            this.setState({ produtos: novosProdutos, editando: false, produtoAtual: null });
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            produtoAtual: {
                ...prevState.produtoAtual!,
                [name]: name === "preco" ? parseFloat(value) : value,
            },
        }));
    };

    handleExcluir = (id: number) => {
        const { produtos } = this.state;
        const novosProdutos = produtos.filter((produto) => produto.id !== id);
        this.setState({ produtos: novosProdutos, produtoAtual: null, editando: false });
    };

    render() {
        const { tema } = this.props;
        const { produtos, produtoAtual, editando } = this.state;

        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <h3
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: tema,
                        textAlign: "center",
                        marginBottom: "20px",
                        marginTop: "30px",
                    }}
                >
                    Produtos Disponíveis
                </h3>
                <div className="list-group">
                    {produtos.map((produto) => (
                        <div
                            key={produto.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                            style={{
                                padding: "15px 20px",
                                fontSize: "1rem",
                                backgroundColor: "white",
                                color: "black",
                                transition: "background-color 0.3s, color 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = tema;
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "white";
                                e.currentTarget.style.color = "black";
                            }}
                        >
                            <span>
                                {produto.nome} - R$ {produto.preco.toFixed(2)} - {produto.consumo} unidades
                            </span>
                            <button
                                className="btn"
                                onClick={() => this.abrirEditar(produto)}
                                style={{
                                    backgroundColor: "#6f42c1",
                                    color: "white",
                                    border: "none",
                                }}
                            >
                                Editar
                            </button>
                        </div>
                    ))}
                </div>

                {editando && produtoAtual && (
                    <div
                        className="modal-overlay d-flex align-items-center justify-content-center"
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: 1000,
                        }}
                    >
                        <div
                            className="modal-content p-4 modal-dialog modal-dialog-centered"
                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "80%",
                                maxWidth: "400px",  
                            }}
                        >
                            <h4 className="mb-4">Editar Produto</h4>
                            <div className="mb-3">
                                <label>Nome:</label>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control"
                                    value={produtoAtual.nome}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Preço:</label>
                                <input
                                    type="number"
                                    name="preco"
                                    className="form-control"
                                    value={produtoAtual.preco}
                                    onChange={this.handleChange}
                                    step="0.01"
                                />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: tema,
                                        color: "white",
                                        border: "none",
                                    }}
                                    onClick={this.salvarAlteracoes}
                                >
                                    Salvar
                                </button>
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: tema,  
                                        color: "white",
                                        border: "none",
                                        marginLeft: "10px",
                                    }}
                                    onClick={() => this.handleExcluir(produtoAtual.id)}  
                                >
                                    Excluir produto
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
