import React, { useState } from "react";
import axios from "axios";

const CadastrarCliente: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: {
      ddd: "",
      numero: "",
    },
    nome_social: "",
    endereco: {
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      numero: "",
      codigoPostal: "",
      informacoesAdicionais: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("endereco.")) {
      const field = name.split(".")[1]; 
      setForm((prev) => ({
        ...prev,
        endereco: { ...prev.endereco, [field]: value },
      }));
    } else if (name.startsWith("telefone.")) {
      const field = name.split(".")[1]; 
      setForm((prev) => ({
        ...prev,
        telefone: { ...prev.telefone, [field]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:32831/cliente/cadastrar", form)
      .then(() => alert("Cliente cadastrado com sucesso!"))
      .catch((error) => alert(`Erro ao cadastrar cliente: ${error.message}`));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: "#6f42c1" }}>
        <img
          src="/add.png"
          alt="Cadastrar"
          style={{ height: "30px", marginRight: "10px", marginBottom: "5px" }}
        />
        Cadastrar Cliente
      </h2>
      <form onSubmit={handleSubmit} className="row g-3">
        {/* Nome */}
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="form-control"
            placeholder="Digite o nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        {/* Nome Social */}
        <div className="col-md-6">
          <label htmlFor="nome_social" className="form-label">
            Nome Social
          </label>
          <input
            type="text"
            id="nome_social"
            name="nome_social"
            className="form-control"
            placeholder="Digite o nome social"
            value={form.nome_social}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Digite o email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        
        <h4 className="mt-4" style={{ color: "#6f42c1" }}>
          Telefone
        </h4>
        <div className="col-md-6">
          <label htmlFor="telefone.ddd" className="form-label">
            DDD
          </label>
          <input
            type="text"
            id="telefone.ddd"
            name="telefone.ddd"
            className="form-control"
            placeholder="Digite o DDD"
            value={form.telefone.ddd}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="telefone.numero" className="form-label">
            Número
          </label>
          <input
            type="text"
            id="telefone.numero"
            name="telefone.numero"
            className="form-control"
            placeholder="Digite o número"
            value={form.telefone.numero}
            onChange={handleChange}
          />
        </div>

        <h4 className="mt-4" style={{ color: "#6f42c1" }}>
          Endereço
        </h4>
        <div className="col-md-6">
          <label htmlFor="endereco.rua" className="form-label">
            Rua
          </label>
          <input
            type="text"
            id="endereco.rua"
            name="endereco.rua"
            className="form-control"
            placeholder="Digite a rua"
            value={form.endereco.rua}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="endereco.numero" className="form-label">
            Número
          </label>
          <input
            type="text"
            id="endereco.numero"
            name="endereco.numero"
            className="form-control"
            placeholder="Digite o número"
            value={form.endereco.numero}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="endereco.bairro" className="form-label">
            Bairro
          </label>
          <input
            type="text"
            id="endereco.bairro"
            name="endereco.bairro"
            className="form-control"
            placeholder="Digite o bairro"
            value={form.endereco.bairro}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="endereco.cidade" className="form-label">
            Cidade
          </label>
          <input
            type="text"
            id="endereco.cidade"
            name="endereco.cidade"
            className="form-control"
            placeholder="Digite a cidade"
            value={form.endereco.cidade}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="endereco.estado" className="form-label">
            Estado
          </label>
          <input
            type="text"
            id="endereco.estado"
            name="endereco.estado"
            className="form-control"
            placeholder="Digite o estado"
            value={form.endereco.estado}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="endereco.codigoPostal" className="form-label">
            Código Postal
          </label>
          <input
            type="text"
            id="endereco.codigoPostal"
            name="endereco.codigoPostal"
            className="form-control"
            placeholder="Digite o CEP"
            value={form.endereco.codigoPostal}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="endereco.informacoesAdicionais" className="form-label">
            Informações Adicionais
          </label>
          <input
            type="text"
            id="endereco.informacoesAdicionais"
            name="endereco.informacoesAdicionais"
            className="form-control"
            placeholder="Digite informações adicionais"
            value={form.endereco.informacoesAdicionais}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 text-center">
          <button
            type="submit"
            className="btn text-white"
            style={{ backgroundColor: "#6f42c1", marginTop: "15px", marginBottom: "15px" }}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarCliente;
