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
            // ... mais produtos
        ];
        
        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <h3
                    style={{
                        fontSize: "2.2rem", // Tamanho da fonte do título
                        fontWeight: "bold", // Negrito para o título
                        color: this.props.tema, // Cor do título com base no tema
                        textAlign: "center", // Centralização do título
                        marginBottom: "20px", // Espaçamento inferior
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
                                padding: "15px 20px", // Altura dos itens
                                fontSize: "1.25rem", // Tamanho da fonte dos itens da lista
                                color: "black" // Cor padrão dos itens
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = this.props.tema; // Cor de fundo no hover
                                e.currentTarget.style.color = "white"; // Cor do texto no hover
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = "white"; // Retorna a cor de fundo
                                e.currentTarget.style.color = "black"; // Retorna a cor do texto
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
