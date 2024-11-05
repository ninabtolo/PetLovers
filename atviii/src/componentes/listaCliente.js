import React from "react";

function ListaCliente({ tema }) {
    return (
        <div className="container-fluid">
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: tema, textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>
                Lista de Clientes
            </h2>
            <div className="list-group">
                {[...Array(6)].map((_, index) => (
                    <a
                        key={`cliente-${index + 1}`}
                        href="#"
                        className="list-group-item list-group-item-action"
                        style={{ padding: "15px 20px", fontSize: "1rem", backgroundColor: "white", color: "black", transition: "background-color 0.3s, color 0.3s" }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = tema;
                            e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "white";
                            e.currentTarget.style.color = "black";
                        }}
                    >
                        Cliente {index + 1}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ListaCliente;
