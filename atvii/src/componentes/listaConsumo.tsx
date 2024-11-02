import { Component } from "react";

type props = {
    tema: string
}

export default class ListaClientesTopConsumidores extends Component<props> {
    render() {
        const clientesTop = [
            { nome: "Cliente 1", consumo: 150 },
            { nome: "Cliente 2", consumo: 120 },
            { nome: "Cliente 3", consumo: 90 },
            { nome: "Cliente 4", consumo: 75 },
        ];

        let tema = this.props.tema;
        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <h3
                    style={{
                        fontSize: "2rem", 
                        fontWeight: "bold", 
                        color: tema, 
                        textAlign: "center", 
                        marginBottom: "20px", 
                        marginTop: "30px" 
                    }}
                >
                    Clientes que Mais Consumiram
                </h3>
                <div className="list-group">
                    {clientesTop.map((cliente, index) => (
                        <a
                            key={cliente.nome}
                            href="#"
                            className="list-group-item list-group-item-action"
                            style={{
                                padding: "15px 20px", 
                                fontSize: "1rem", 
                                backgroundColor: "white", 
                                color: "black", 
                                transition: "background-color 0.3s, color 0.3s" 
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = tema; 
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "white"; 
                                e.currentTarget.style.color = "black";
                            }}
                        >
                            {cliente.nome} - {cliente.consumo} unidades
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
