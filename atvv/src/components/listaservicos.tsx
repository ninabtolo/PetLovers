import React, { useEffect, useState } from "react";
import axios from "axios";

interface Servico {
  id: number;
  nome: string;
  preco: number;
}

const ListaServicos: React.FC = () => {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [servicoAtual, setServicoAtual] = useState<Servico | null>(null);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/servicos")
      .then((response) => setServicos(response.data))
      .catch((err) => alert("Erro ao buscar serviços: " + err));
  }, []);

  const handleEditar = (servico: Servico) => {
    setServicoAtual(servico);
    setEditando(true);
  };

  const handleExcluir = (id: number) => {
    if (window.confirm("Deseja realmente excluir este serviço?")) {
      axios
        .delete(`http://localhost:3001/servicos/${id}`)
        .then(() =>
          setServicos((prev) => prev.filter((servico) => servico.id !== id))
        )
        .catch((err) => alert("Erro ao excluir serviço: " + err));
    }
  };

  const handleSalvar = () => {
    if (servicoAtual) {
      axios
        .put(`http://localhost:3001/servicos/${servicoAtual.id}`, servicoAtual)
        .then(() => {
          setServicos((prev) =>
            prev.map((servico) =>
              servico.id === servicoAtual.id ? servicoAtual : servico
            )
          );
          setEditando(false);
        })
        .catch((err) => alert("Erro ao salvar alterações: " + err));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setServicoAtual((prev) =>
      prev ? { ...prev, [name]: name === "preco" ? parseFloat(value) : value } : null
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#6f42c1" }}>
        <img
          src="/dog.png"
          alt="Dog"
          style={{ height: "30px", marginRight: "10px", marginBottom: '5px' }}
        />
        Lista de Serviços
      </h2>
      <ul className="list-group">
  {servicos.map((servico) => (
    <li
      key={servico.id}
      className="list-group-item"
      style={{
        backgroundColor: "white",
        color: "black",
        transition: "0.3s",
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
          {servico.nome} - <strong>R$ {Number(servico.preco).toFixed(2)}</strong>
        </span>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm me-2"
            style={{
              backgroundColor: "#6f42c1",
              color: "white",
            }}
            onClick={() => handleEditar(servico)}
          >
            Editar
          </button>
          <button
            className="btn btn-sm"
            style={{ backgroundColor: "#6f42c1", color: "white" }}
            onClick={() => handleExcluir(servico.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>

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
                Editar Serviço</h4>
            <div className="mb-3">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                className="form-control"
                value={servicoAtual.nome}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Preço</label>
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
                className="btn text-white me-2"
                style={{ backgroundColor: "#6f42c1" }}
                onClick={handleSalvar}
              >
                Salvar
              </button>
              <button
                className="btn btn-secondary"
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

export default ListaServicos;
