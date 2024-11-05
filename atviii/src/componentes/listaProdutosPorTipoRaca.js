import React from "react";

function ListaProdutosPorTipoRaca({ tema }) {
    const produtosPorRaca = [
        { tipo: "Cachorro", raca: "Labrador", consumo: 100 },
        { tipo: "Gato", raca: "Siamês", consumo: 85 },
        { tipo: "Cachorro", raca: "Bulldog", consumo: 70 },
    ];

    return (
        <div className="container-fluid" style={{ marginTop: "30px" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: tema, textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
                Produtos e Serviços por Tipo e Raça de Pet
            </h3>
            <div className="list-group">
                {produtosPorRaca.map((item) => (
                    <a
                        key={`${item.tipo}-${item.raca}`}
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
                        {item.tipo} - {item.raca} - {item.consumo} unidades
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ListaProdutosPorTipoRaca;
