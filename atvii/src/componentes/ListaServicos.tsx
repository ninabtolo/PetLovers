import React, { Component } from "react";

type Props = {
    tema: string;
};

type Servico = {
    id: number;
    nome: string;
    preco: number;
    consumo: number;
};

type State = {
    servicos: Servico[];
    servicoAtual?: Servico;
    editando: boolean;
};

export default class ListaServicos extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            servicos: [
                { id: 1, nome: "Serviço 1", preco: 50.0, consumo: 150 },
                { id: 2, nome: "Serviço 2", preco: 75.0, consumo: 130 },
                { id: 3, nome: "Serviço 3", preco: 20.0, consumo: 85 },
            ],
            editando: false,
        };
    }

    abrirEditar(servico: Servico) {
        this.setState({ servicoAtual: servico, editando: true });
    }

    salvarAlteracoes = () => {
        const { servicos, servicoAtual } = this.state;
        if (servicoAtual) {
            const novosServicos = servicos.map((servico) =>
                servico.id === servicoAtual.id ? servicoAtual : servico
            );
            this.setState({ servicos: novosServicos, editando: false, servicoAtual: undefined });
        }
    };

    handleExcluir = (id: number) => {
        const { servicos } = this.state;
        const novosServicos = servicos.filter((servico) => servico.id !== id);
        this.setState({ servicos: novosServicos, servicoAtual: undefined, editando: false });
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            servicoAtual: {
                ...prevState.servicoAtual!,
                [name]: name === "preco" ? parseFloat(value) : value,
            },
        }));
    };

    render() {
        const { tema } = this.props;
        const { servicos, servicoAtual, editando } = this.state;

        return (
            <div className="container-fluid">
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
                    Serviços Disponíveis
                </h3>
                <div className="list-group">
                    {servicos.map((servico) => (
                        <div
                            key={servico.id}
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
                                {servico.nome} - R$ {servico.preco.toFixed(2)} - {servico.consumo} unidades
                            </span>
                            <button
                                className="btn"
                                onClick={() => this.abrirEditar(servico)}
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

                {editando && servicoAtual && (
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
                            <h4 className="mb-4">Editar Serviço</h4>
                            <div className="mb-3">
                                <label>Nome:</label>
                                <input
                                    type="text"
                                    name="nome"
                                    className="form-control"
                                    value={servicoAtual.nome}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Preço:</label>
                                <input
                                    type="number"
                                    name="preco"
                                    className="form-control"
                                    value={servicoAtual.preco}
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
                                    onClick={() => this.handleExcluir(servicoAtual.id)}  
                                >
                                    Excluir serviço
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
