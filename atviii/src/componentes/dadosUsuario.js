import React from "react";

function DadosUsuario({ tema }) {
    const usuario = {
        nome: "João Silva",
        email: "joao.silva@email.com",
        telefone: "(11) 91234-5678",
    };

    return (
        <div className="container-fluid" style={{ marginTop: "30px" }}>
            <h3 style={{ fontSize: "2rem", color: tema, fontWeight: "bold", textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>
                Dados do Usuário
            </h3>
            <div
                className="p-4"
                style={{
                    backgroundColor: tema,
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "1rem"
                }}
            >
                <p><strong>Nome:</strong> {usuario.nome}</p>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>Telefone:</strong> {usuario.telefone}</p>
            </div>
        </div>
    );
}

export default DadosUsuario;
