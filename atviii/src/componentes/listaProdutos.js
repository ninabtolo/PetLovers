import React, { useState } from "react";

function ListaProdutos({ tema }) {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Produto 1", preco: 120 },
        { id: 2, nome: "Produto 2", preco: 95 },
        { id: 3, nome: "Produto 3", preco: 75 },
    ]);
    const [produtoAtual, setProdutoAtual] = useState(null);

    const handleEditar = (produto) => {
        setProdutoAtual(produto);
    };

    const handleSalvar = () => {
        if (produtoAtual) {
            setProdutos((prev) =>
                prev.map((produto) =>
                    produto.id === produtoAtual.id ? produtoAtual : produto
                )
            );
            setProdutoAtual(null);
        }
    };

    const handleExcluir = (id) => {
        setProdutos((prev) => prev.filter((produto) => produto.id !== id));
        setProdutoAtual(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProdutoAtual({ ...produtoAtual, [name]: value });
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
                        <span>{produto.nome} - R$ {produto.preco}</span>
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "#6f42c1",
                                color: "white",
                                border: "none",
                            }}
                            onClick={() => handleEditar(produto)}
                        >
                            Editar
                        </button>
                    </div>
                ))}
            </div>

            {produtoAtual && (
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Preço:</label>
                            <input
                                type="number"
                                name="preco"
                                className="form-control"
                                value={produtoAtual.preco}
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
                                onClick={() => handleExcluir(produtoAtual.id)}  
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

export default ListaProdutos;
