import React, { useEffect, useState } from "react";
import axios from "axios";

interface Cliente {
  id: number;
  nome: string;
  nome_social: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
  tipo_pet: string;
  nome_pet: string;
  raca: string;
}

const ListaClientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [filtro, setFiltro] = useState("");
  const [clienteAtual, setClienteAtual] = useState<Cliente | null>(null);
  const [editando, setEditando] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:3001/clientes")
      .then((response) => setClientes(response.data))
      .catch((err) => alert("Erro ao buscar clientes: " + err));
  }, []);

  const handleEditar = (cliente: Cliente) => {
    setClienteAtual(cliente);
    setEditando(true);
  };

  const handleExcluir = (id: number) => {
    if (window.confirm("Deseja realmente excluir este cliente?")) {
      axios
        .delete(`http://localhost:3001/clientes/${id}`)
        .then(() =>
          setClientes((prev) => prev.filter((cliente) => cliente.id !== id))
        )
        .catch((err) => alert("Erro ao excluir cliente: " + err));
    }
  };

  const handleSalvar = () => {
    if (clienteAtual) {
      axios
        .put(`http://localhost:3001/clientes/${clienteAtual.id}`, clienteAtual)
        .then(() => {
          setClientes((prev) =>
            prev.map((cliente) =>
              cliente.id === clienteAtual.id ? clienteAtual : cliente
            )
          );
          setEditando(false);
        })
        .catch((err) => alert("Erro ao salvar alterações: " + err));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClienteAtual((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#6f42c1" }}>
        <img
          src="/list.png"
          alt="list"
          style={{ height: "40px", marginRight: "10px", marginBottom: '5px' }}
        />
        Lista de Clientes
      </h2>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Pesquisar clientes..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul className="list-group">
        {clientesFiltrados.map((cliente) => (
          <li
            key={cliente.id}
            className="list-group-item d-flex justify-content-between align-items-center"
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
            <span>{cliente.nome}</span>
            <div>
              <button
                className="btn btn-sm"
                style={{
                  backgroundColor: "#6f42c1",
                  color: "white",
                  marginRight: "25px",
                }}
                onClick={() => handleEditar(cliente)}
              >
                Editar
              </button>
              <button
                className="btn btn-sm"
                style={{ backgroundColor: "#6f42c1", color: "white" }}
                onClick={() => handleExcluir(cliente.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>

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
          }}
        >
          <div
            className="modal-content p-4"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              width: "80%",
              maxWidth: "400px",
              maxHeight: "70vh",
              overflowY: "auto",
            }}
          >
            <h4>
            <img
          src="/pencil.png"
          alt="pencil"
          style={{ height: "30px", marginRight: "10px", marginBottom: '5px' }}
        />
            Editar Cliente</h4>
            {Object.entries(clienteAtual).map(([key, value]) =>
              key !== "id" ? (
                <div className="mb-3" key={key}>
                  <label>{key}</label>
                  <input
                    type="text"
                    name={key}
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                  />
                </div>
              ) : null
            )}
            <div className="d-flex justify-content-end">
              <button
                className="btn"
                style={{
                  backgroundColor: "#6f42c1",
                  color: "white",
                  width: "120px",
                  marginRight: "10px",
                }}
                onClick={handleSalvar}
              >
                Salvar
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: "#6f42c1",
                  color: "white",
                  width: "120px",
                }}
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

export default ListaClientes;
