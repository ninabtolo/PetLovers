import React, { Component } from "react";

type Props = {
    tema: string;
};

type Cliente = {
    id: number;
    nome: string;
    nomeSocial: string;
    email: string;
    telefone: string;
    tipoPet: string;
    nomePet: string;
};

type State = {
    clientes: Cliente[];
    clienteAtual?: Cliente;
    editando: boolean;
};

export default class ListaCliente extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            clientes: [
                {
                    id: 1,
                    nome: "João Silva",
                    nomeSocial: "Joãozinho",
                    email: "joao.silva@email.com",
                    telefone: "(12) 91234-5678",
                    tipoPet: "Cachorro",
                    nomePet: "Rex",
                },
                {
                    id: 2,
                    nome: "Maria Oliveira",
                    nomeSocial: "Mari",
                    email: "maria.oliveira@email.com",
                    telefone: "(12) 98765-4321",
                    tipoPet: "Gato",
                    nomePet: "Mimi",
                },
            ],
            editando: false,
        };
    }

    abrirEditar(cliente: Cliente) {
        this.setState({ clienteAtual: cliente, editando: true });
    }

    salvarAlteracoes = () => {
        const { clientes, clienteAtual } = this.state;
        if (clienteAtual) {
            const novosClientes = clientes.map((cliente) =>
                cliente.id === clienteAtual.id ? clienteAtual : cliente
            );
            this.setState({ clientes: novosClientes, editando: false });
        }
    };

    excluirCliente = (id: number) => {
        const novosClientes = this.state.clientes.filter((cliente) => cliente.id !== id);
        this.setState({ clientes: novosClientes, editando: false });
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            clienteAtual: { ...prevState.clienteAtual!, [name]: value },
        }));
    };

    render() {
        const { tema } = this.props;
        const { clientes, clienteAtual, editando } = this.state;

        return (
            <div className="container-fluid">
                <h2
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: tema,
                        textAlign: "center",
                        marginBottom: "20px",
                        marginTop: "30px",
                    }}
                >
                    Lista de Clientes
                </h2>
                <div className="list-group">
                    {clientes.map((cliente) => (
                        <div
                            key={cliente.id}
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
                            <span>{cliente.nome}</span>
                            <button
                                className="btn"
                                onClick={() => this.abrirEditar(cliente)}
                                style={{
                                    backgroundColor: "#6f42c1",
                                    color: "white",
                                    border: "none",
                                    outline: "none",
                                }}
                            >
                                Editar
                            </button>
                        </div>
                    ))}
                </div>

                {editando && clienteAtual && (
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
                            <h4 className="mb-4">Editar Cliente</h4>
                            <div className="mb-3">
                                <label>Nome Social:</label>
                                <input
                                    type="text"
                                    name="nomeSocial"
                                    className="form-control"
                                    value={clienteAtual.nomeSocial}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={clienteAtual.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Telefone:</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    className="form-control"
                                    value={clienteAtual.telefone}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Tipo de Pet:</label>
                                <input
                                    type="text"
                                    name="tipoPet"
                                    className="form-control w-100"
                                    value={clienteAtual.tipoPet}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Nome do Pet:</label>
                                <input
                                    type="text"
                                    name="nomePet"
                                    className="form-control"
                                    value={clienteAtual.nomePet}
                                    onChange={this.handleChange}
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
                                    className="btn ms-2"
                                    style={{
                                        backgroundColor: tema,
                                        color: "white",
                                        border: "none",
                                    }}
                                    onClick={() => this.excluirCliente(clienteAtual.id)}
                                >
                                    Excluir cliente
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
