import { Component } from "react";

type Props = {
    tema: string;
};

class ListaProdutosPorTipoRaca extends Component<Props> {
    render() {
        const produtosPorRaca = [
            { tipo: "Cachorro", raca: "Labrador", consumo: 100 },
            { tipo: "Gato", raca: "Siamês", consumo: 85 },
            { tipo: "Cachorro", raca: "Bulldog", consumo: 70 },
            // ... mais itens por tipo e raça
        ];
        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <h3
                    style={{
                        fontSize: "2.2rem",
                        fontWeight: "bold",
                        color: this.props.tema,
                        textAlign: "center",
                        marginBottom: "20px",
                        marginTop: "20px"
                    }}
                >
                    Produtos e Serviços por Tipo e Raça de Pet
                </h3>
                <div className="list-group">
                    {produtosPorRaca.map((item) => (
                        <a
                            key={`${item.tipo}-${item.raca}`}
                            href="#"
                            className="list-group-item list-group-item-action"
                            style={{
                                padding: "15px 20px",
                                fontSize: "1.25rem",
                                color: "black"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = this.props.tema;
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
}

export default ListaProdutosPorTipoRaca;
