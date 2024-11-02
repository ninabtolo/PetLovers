import { Component } from "react";

type Props = {
    tema: string;
};

class ListaProdutosServicosMaisConsumidos extends Component<Props> {
    render() {
        const produtosServicos = [
            { item: "Serviço 1", consumo: 200 },
            { item: "Produto 2", consumo: 180 },
            { item: "Serviço 3", consumo: 160 },
            // ... mais produtos/serviços
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
                    Produtos e Serviços Mais Consumidos
                </h3>
                <div className="list-group">
                    {produtosServicos.map((item) => (
                        <a
                            key={item.item}
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
                            {item.item} - {item.consumo} unidades
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListaProdutosServicosMaisConsumidos;
