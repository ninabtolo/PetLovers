import React, { useState } from "react";

function ListaServicos({ tema }) {
    const [servicos, setServicos] = useState([
        { id: 1, nome: "Serviço 1", preco: 150 },
        { id: 2, nome: "Serviço 2", preco: 130 },
        { id: 3, nome: "Serviço 3", preco: 85 },
    ]);
    const [servicoAtual, setServicoAtual] = useState(null);

    const handleEditar = (servico) => {
        setServicoAtual(servico);
    };

    const handleSalvar = () => {
        if (servicoAtual) {
            setServicos((prev) =>
                prev.map((servico) =>
                    servico.id === servicoAtual.id ? servicoAtual : servico
                )
            );
            setServicoAtual(null);
        }
    };

    const handleExcluir = (id) => {
        setServicos((prev) => prev.filter((servico) => servico.id !== id));
        setServicoAtual(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setServicoAtual({ ...servicoAtual, [name]: value });
    };

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
                        <span>{servico.nome} - R$ {servico.preco}</span>
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "#6f42c1",
                                color: "white",
                                border: "none",
                            }}
                            onClick={() => handleEditar(servico)}
                        >
                            Editar
                        </button>
                    </div>
                ))}
            </div>

            {servicoAtual && (
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Preço:</label>
                            <input
                                type="number"
                                name="preco"
                                className="form-control"
                                value={servicoAtual.preco}
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
                                onClick={() => handleExcluir(servicoAtual.id)}  
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

export default ListaServicos;
