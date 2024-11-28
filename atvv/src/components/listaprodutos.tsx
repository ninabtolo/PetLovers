import React, { useEffect, useState } from "react";
import axios from "axios";

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

const ListaProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoAtual, setProdutoAtual] = useState<Produto | null>(null);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos") 
      .then((response) => setProdutos(response.data))
      .catch((err) => alert("Erro ao buscar produtos: " + err));
  }, []);

  const handleEditar = (produto: Produto) => {
    setProdutoAtual(produto);
    setEditando(true);
  };

  const handleExcluir = (id: number) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      axios
        .delete(`http://localhost:3001/produtos/${id}`)
        .then(() =>
          setProdutos((prev) => prev.filter((produto) => produto.id !== id))
        )
        .catch((err) => alert("Erro ao excluir produto: " + err));
    }
  };

  const handleSalvar = () => {
    if (produtoAtual) {
      axios
        .put(`http://localhost:3001/produtos/${produtoAtual.id}`, produtoAtual)
        .then(() => {
          setProdutos((prev) =>
            prev.map((produto) =>
              produto.id === produtoAtual.id ? produtoAtual : produto
            )
          );
          setEditando(false);
        })
        .catch((err) => alert("Erro ao salvar alterações: " + err));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProdutoAtual((prev) =>
      prev ? { ...prev, [name]: name === "preco" ? parseFloat(value) : value } : null
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#6f42c1", marginBottom:"10px" }}>
        <img
          src="/bone.png"
          alt="Bone"
          style={{ height: "40px", marginRight: "10px", marginBottom: "5px" }}
        />
        Lista de Produtos
      </h2>
      <ul className="list-group">
  {produtos.map((produto) => (
    <li
      key={produto.id}
      className="list-group-item"
      style={{
        backgroundColor: "white",
        color: "black",
        transition: "0.3s",
        lineHeight: "2rem"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#a785e2";
        e.currentTarget.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "white";
        e.currentTarget.style.color = "black";
      }}
    >
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
        <span className="mb-2 mb-md-0">
          {produto.nome} - <strong>R$ {Number(produto.preco).toFixed(2)}</strong>
        </span>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm me-2"
            style={{
              backgroundColor: "#6f42c1",
              color: "white",
            }}
            onClick={() => handleEditar(produto)}
          >
            Editar
          </button>
          <button
            className="btn btn-sm"
            style={{ backgroundColor: "#6f42c1", color: "white" }}
            onClick={() => handleExcluir(produto.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>


      {editando && produtoAtual && (
        <div
          className="modal-overlay d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            zIndex: "9999999",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="modal-content p-4"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: "80%",
              maxWidth: "400px",
              maxHeight: "700px",
              overflowY: "auto",
            }}
          >
            <h4>
            <img
          src="/pencil.png"
          alt="pencil"
          style={{ height: "30px", marginRight: "10px", marginBottom: '5px' }}
        />
                Editar Produto</h4>
            <div className="mb-3">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                className="form-control"
                value={produtoAtual.nome}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Preço</label>
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
                className="btn text-white me-2"
                style={{ backgroundColor: "#6f42c1" }}
                onClick={handleSalvar}
              >
                Salvar
              </button>
              <button
                className="btn text-white me-2"
                style={{ backgroundColor: "#6f42c1" }}
                onClick={() => setEditando(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaProdutos;
