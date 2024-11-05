import React from "react";

function ListaServicos({ tema }) {
    const servicos = [
        { nome: "Serviço 1", consumo: 150 },
        { nome: "Serviço 2", consumo: 130 },
        { nome: "Serviço 3", consumo: 85 },
    ];

    return (
        <div className="container-fluid" style={{ marginTop: "30px", marginBottom: "30px" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: tema, textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>
                Serviços Disponíveis
            </h3>
            <div className="list-group">
                {servicos.map((servico) => (
                    <a
                        key={servico.nome}
                        href="#"
                        className="list-group-item list-group-item-action"
                        style={{ padding: "15px 20px", fontSize: "1rem", color: "black" }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = tema;
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = "white";
                            e.currentTarget.style.color = "black";
                        }}
                    >
                        {servico.nome} - {servico.consumo} unidades
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ListaServicos;
