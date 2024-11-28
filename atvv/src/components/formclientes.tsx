import React, { useState } from 'react';
import axios from 'axios';

const CadastroClientes: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        nomeSocial: '',
        telefone: '',
        email: '',
        endereco: '',
        cpf: '',
        nomePet: '',
        tipoPet: '',
        raca: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        const adjustedData = {
            ...formData,
            nome_social: formData.nomeSocial,
            tipo_pet: formData.tipoPet,
            nome_pet: formData.nomePet,
        };
    
        axios.post('http://localhost:3001/clientes', adjustedData)
            .then(() => {
                alert('Cliente cadastrado com sucesso!');
                setFormData({
                    nome: '',
                    nomeSocial: '',
                    telefone: '',
                    email: '',
                    endereco: '',
                    cpf: '',
                    nomePet: '',
                    tipoPet: '',
                    raca: '',
                });
            })
            .catch((err) => alert('Erro ao cadastrar cliente: ' + err));
    };
    
    

    return (
        <div className="container mt-5">
            <h2 className="text-center" style={{ color: '#6f42c1' }}>
            <img
          src="/profile.png"
          alt="profile"
          style={{ height: "40px", marginRight: "10px", marginBottom: '5px' }}
        />
                Cadastro de Clientes</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nomeSocial" className="form-label">Nome Social</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nomeSocial"
                        name="nomeSocial"
                        value={formData.nomeSocial}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="endereco" className="form-label">Endereço</label>
                    <input
                        type="text"
                        className="form-control"
                        id="endereco"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">CPF</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nomePet" className="form-label">Nome do Pet</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nomePet"
                        name="nomePet"
                        value={formData.nomePet}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tipoPet" className="form-label">Tipo do Pet</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tipoPet"
                        name="tipoPet"
                        value={formData.tipoPet}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="raca" className="form-label">Raça</label>
                    <input
                        type="text"
                        className="form-control"
                        id="raca"
                        name="raca"
                        value={formData.raca}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn text-white" style={{ backgroundColor: '#6f42c1' }}>
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default CadastroClientes;
