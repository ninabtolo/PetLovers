import { Component } from "react";

type Props = {
    tema: string;
};

class ListaProdutos extends Component<Props> {
    render() {
        const produtos = [
            { nome: "Produto 1", consumo: 120 },
            { nome: "Produto 2", consumo: 95 },
            { nome: "Produto 3", consumo: 75 },
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
                        marginTop: "30px"
                    }}
                >
                    Produtos Disponíveis
                </h3>
                <div className="list-group">
                    {produtos.map((produto) => (
                        <a
                            key={produto.nome}
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
                            {produto.nome} - {produto.consumo} unidades
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListaProdutos;
