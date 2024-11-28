import React, { useState } from "react";
import axios from "axios";

const CadastroProdutoServico: React.FC = () => {
  const [tipo, setTipo] = useState<"produto" | "servico">("produto");
  const [formData, setFormData] = useState({ nome: "", preco: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rota = tipo === "produto" ? "produtos" : "servicos";
    axios
      .post(`http://localhost:3001/${rota}`, formData)
      .then(() => {
        alert(`${tipo === "produto" ? "Produto" : "Serviço"} cadastrado com sucesso!`);
        setFormData({ nome: "", preco: "" });
      })
      .catch((err) => alert("Erro ao cadastrar: " + err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#6f42c1" }}>
      <img
          src="/pets.png"
          alt="pets"
          style={{ height: "30px", marginRight: "10px", marginBottom: '5px' }}
        />
        Cadastro de Produtos ou Serviços
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">Tipo</label>
          <select
            id="tipo"
            name="tipo"
            className="form-select"
            value={tipo}
            onChange={(e) => setTipo(e.target.value as "produto" | "servico")}
          >
            <option value="produto">Produto</option>
            <option value="servico">Serviço</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="form-control"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="preco" className="form-label">Preço</label>
          <input
            type="number"
            id="preco"
            name="preco"
            className="form-control"
            value={formData.preco}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn text-white" style={{ backgroundColor: "#6f42c1" }}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroProdutoServico;
