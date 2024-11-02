import { Component } from "react";

type Props = {
    tema: string;
};

class ListaTop5ClientesValor extends Component<Props> {
    render() {
        const clientesTop5Valor = [
            { nome: "Cliente 1", valor: 1500 },
            { nome: "Cliente 2", valor: 1300 },
            { nome: "Cliente 3", valor: 1100 },
        ];
        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <h3
                    style={{
                        fontSize: "2rem", 
                        fontWeight: "bold", 
                        color: this.props.tema, 
                        textAlign: "center", 
                        marginBottom: "20px",
                        marginTop: "20px"
                    }}
                >
                    Top 5 Clientes por Valor Consumido
                </h3>
                <div className="list-group">
                    {clientesTop5Valor.map((cliente) => (
                        <a
                            key={cliente.nome}
                            href="#"
                            className="list-group-item list-group-item-action"
                            style={{
                                padding: "15px 20px",
                                fontSize: "1rem", 
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
                            {cliente.nome} - R$ {cliente.valor.toFixed(2)}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListaTop5ClientesValor;
