import React, { useState } from "react";

function ListaCliente({ tema }) {
    const [clientes, setClientes] = useState([
        {
            id: 1,
            nome: "João Silva",
            nomeSocial: "Joãozinho",
            cpf: "12345678910",
            email: "joao.silva@email.com",
            telefone: "(11) 91234-5678",
            nomePet: "Doom",
            tipoPet: "Cachorro",
            raca: "Labrador",
        },
        {
            id: 2,
            nome: "Maria Oliveira",
            nomeSocial: "Mari",
            cpf: "12345678911",
            email: "maria.oliveira@email.com",
            telefone: "(11) 98765-4321",
            nomePet: "Hulk",
            tipoPet: "Gato",
            raca: "Siamês",
        },
    ]);
    const [clienteAtual, setClienteAtual] = useState(null);

    const handleEditar = (cliente) => {
        setClienteAtual(cliente);
    };

    const handleSalvar = () => {
        if (clienteAtual) {
            setClientes((prev) =>
                prev.map((cliente) =>
                    cliente.id === clienteAtual.id ? clienteAtual : cliente
                )
            );
            setClienteAtual(null);
        }
    };

    const handleExcluir = (id) => {
        setClientes((prev) => prev.filter((cliente) => cliente.id !== id));
        setClienteAtual(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClienteAtual({ ...clienteAtual, [name]: value });
    };

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
                            style={{
                                backgroundColor: "#6f42c1",
                                color: "white",
                                border: "none",
                            }}
                            onClick={() => handleEditar(cliente)}
                        >
                            Editar
                        </button>
                    </div>
                ))}
            </div>

            {clienteAtual && (
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
                                maxHeight: "90vh",
                                overflowY: "auto"
                            }}
                        >
                        <h4 className="mb-4">Editar Cliente</h4>
                        <div className="mb-3">
                            <label>Nome:</label>
                            <input
                                type="text"
                                name="nome"
                                className="form-control"
                                value={clienteAtual.nome}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Nome Social:</label>
                            <input
                                type="text"
                                name="nomeSocial"
                                className="form-control"
                                value={clienteAtual.nomeSocial}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>CPF:</label>
                            <input
                                type="text"
                                name="cpf"
                                className="form-control"
                                value={clienteAtual.cpf}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={clienteAtual.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Telefone:</label>
                            <input
                                type="text"
                                name="telefone"
                                className="form-control"
                                value={clienteAtual.telefone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Nome do pet:</label>
                            <input
                                type="text"
                                name="nomePet"
                                className="form-control"
                                value={clienteAtual.nomePet}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                                <label>Tipo de Pet:</label>
                                <input
                                    type="text"
                                    name="tipoPet"
                                    className="form-control"
                                    value={clienteAtual.tipoPet}
                                    onChange={handleChange}
                                />
                            </div>
                        <div className="mb-3">
                            <label>Raça:</label>
                            <input
                                type="text"
                                name="raca"
                                className="form-control"
                                value={clienteAtual.raca}
                                onChange={handleChange}
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
                                onClick={handleSalvar}
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
                                onClick={() => handleExcluir(clienteAtualAtual.id)}  
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListaCliente;

