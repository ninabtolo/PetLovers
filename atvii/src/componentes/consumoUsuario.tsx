import { Component } from "react";

type Props = {
    tema: string;
};

class ConsumoUsuario extends Component<Props> {
    render() {
        const consumos = [
            { nome: "Banho", quantidade: 5 },
            { nome: "Tosa", quantidade: 3 },
            { nome: "Ração Premium", quantidade: 2 },
            { nome: "Vacina Antirrábica", quantidade: 1 },
        ];

        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <h3 style={{ fontSize: "2rem", color: this.props.tema, fontWeight: "bold", textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>
                    Serviços/Produtos Consumidos
                </h3>
                <div className="list-group">
                    {consumos.map((consumo, index) => (
                        <a
                            key={index}
                            href="#"
                            className="list-group-item list-group-item-action"
                            style={{ padding: "15px 20px", fontSize: "1rem", color: "black" }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = this.props.tema;
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = "white";
                                e.currentTarget.style.color = "black";
                            }}
                        >
                            {consumo.nome} - {consumo.quantidade} vezes
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default ConsumoUsuario;
