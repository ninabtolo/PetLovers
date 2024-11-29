import React, { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:32831/cliente",
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});

interface Endereco {
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  numero: string;
  codigoPostal: string;
  informacoesAdicionais: string;
}

interface Cliente {
  id: number;
  nome: string;
  email: string;
  endereco: Endereco;
}

const ListarClientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [clienteAtual, setClienteAtual] = useState<Cliente | null>(null);
  const [editando, setEditando] = useState(false);
  const [excluindo, setExcluindo] = useState(false);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    api
      .get("/clientes")
      .then((response) => setClientes(response.data))
      .catch((error) => alert(`Erro ao listar clientes: ${error.message}`));
  }, []);

  const handleEditar = (cliente: Cliente) => {
    setClienteAtual({
      ...cliente,
      endereco: cliente.endereco || {
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        numero: "",
        codigoPostal: "",
        informacoesAdicionais: "",
      },
    });
    setEditando(true);
  };

  const handleExcluir = (cliente: Cliente) => {
    setClienteAtual(cliente);
    setExcluindo(true);
  };

  const salvarEdicao = () => {
    if (clienteAtual) {
      const { id, ...clienteSemId } = clienteAtual;
      setCarregando(true);
      api
        .put("/atualizar", { id, ...clienteSemId }) 
        .then(() => {
          setClientes((prev) =>
            prev.map((cliente) =>
              cliente.id === clienteAtual.id ? clienteAtual : cliente
            )
          );
          setEditando(false);
        })
        .catch((error) => alert(`Erro ao atualizar cliente: ${error.message}`))
        .finally(() => setCarregando(false));
    }
  };

  const confirmarExclusao = () => {
    if (clienteAtual) {
      setCarregando(true);
      api
      .delete("/excluir", { data: { id: clienteAtual.id } })
        .then(() => {
          setClientes((prev) =>
            prev.filter((cliente) => cliente.id !== clienteAtual.id)
          );
          setExcluindo(false);
        })
        .catch((error) => alert(`Erro ao excluir cliente: ${error.message}`))
        .finally(() => setCarregando(false));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("endereco.")) {
      const field = name.split(".")[1];
      setClienteAtual((prev) =>
        prev
          ? {
              ...prev,
              endereco: { ...prev.endereco, [field]: value },
            }
          : null
      );
    } else if (name.startsWith("telefone.")) {
      const field = name.split(".")[1];
      setClienteAtual((prev) =>
        prev
          ? {
              ...prev,
            }
          : null
      );
    } else {
      setClienteAtual((prev) =>
        prev ? { ...prev, [name]: value } : null
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#6f42c1" }}>
      <img
          src="/list2.png"
          alt="list"
          style={{ height: "30px", marginRight: "10px", marginBottom: "5px" }}
        />
        Lista de Clientes
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Rua</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.endereco.rua}</td>
                <td>{cliente.endereco.bairro}</td>
                <td>{cliente.endereco.cidade}</td>
                <td className="d-flex flex-column align-items-center">
                  <button
                    className="btn mb-2"
                    style={{
                      backgroundColor: "#6f42c1",
                      color: "white",
                      width: "120px",
                    }}
                    onClick={() => handleEditar(cliente)}
                    disabled={carregando}
                  >
                    Editar
                  </button>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#6f42c1",
                      color: "white",
                      width: "120px",
                    }}
                    onClick={() => handleExcluir(cliente)}
                    disabled={carregando}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
          }}
        >
          <div
            className="modal-content p-4"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              maxWidth: "500px",
              maxHeight: "600px",
              overflowY: "auto",
            }}
          >
            <h4>Editar Cliente</h4>
            <div className="mb-3">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                className="form-control"
                value={clienteAtual.nome}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={clienteAtual.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Rua</label>
              <input
                type="text"
                name="endereco.rua"
                className="form-control"
                value={clienteAtual.endereco?.rua || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Bairro</label>
              <input
                type="text"
                name="endereco.bairro"
                className="form-control"
                value={clienteAtual.endereco?.bairro || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Cidade</label>
              <input
                type="text"
                name="endereco.cidade"
                className="form-control"
                value={clienteAtual.endereco?.cidade || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Estado</label>
              <input
                type="text"
                name="endereco.estado"
                className="form-control"
                value={clienteAtual.endereco?.estado || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Número</label>
              <input
                type="text"
                name="endereco.numero"
                className="form-control"
                value={clienteAtual.endereco?.numero || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Código Postal</label>
              <input
                type="text"
                name="endereco.codigoPostal"
                className="form-control"
                value={clienteAtual.endereco?.codigoPostal || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label>Informações Adicionais</label>
              <input
                type="text"
                name="endereco.informacoesAdicionais"
                className="form-control"
                value={clienteAtual.endereco?.informacoesAdicionais || ""}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-between">
            <button
            className="btn text-white"
              style={{ backgroundColor: "#6f42c1"}}
              onClick={salvarEdicao}
              disabled={carregando}
            >
                Confirmar
              </button>
              <button
              className="btn text-white"
              style={{ backgroundColor: "#6f42c1"}}
                  onClick={() => setEditando(false)}
                >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {excluindo && clienteAtual && (
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
              maxWidth: "500px",
            }}
          >
            <h4>Excluir Cliente</h4>
            <p>
              Tem certeza que deseja excluir o cliente{" "}
              {clienteAtual.nome}?
            </p>
            <div className="d-flex justify-content-between">
            <button
            className="btn text-white"
              style={{ backgroundColor: "#6f42c1"}}
                  onClick={confirmarExclusao}
                  disabled={carregando}
                >
                Confirmar
              </button>
              <button
              className="btn text-white"
              style={{ backgroundColor: "#6f42c1"}}
                    onClick={() => setExcluindo(false)}
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

export default ListarClientes;
