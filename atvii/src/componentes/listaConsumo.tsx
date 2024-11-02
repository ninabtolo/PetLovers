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
                        fontSize: "2.2rem", // Aumenta o tamanho da fonte do título
                        fontWeight: "bold", // Deixa o título em negrito
                        color: tema, // Cor do tema para o título
                        textAlign: "center", // Centraliza o títuloombra ao texto
                        marginBottom: "20px", // Espaçamento inferior
                        marginTop: "30px" // Espaçamento inferior
                    }}
                >
                    Clientes que mais consumiram
                </h3>
                <div className="list-group">
                    {clientesTop.map((cliente, index) => (
                        <a
                            key={cliente.nome}
                            href="#"
                            className="list-group-item list-group-item-action"
                            style={{
                                padding: "15px 20px", // Ajusta a altura
                                fontSize: "1.25rem", // Aumenta o tamanho da fonte dos itens da lista
                                backgroundColor: "white", // Cor de fundo padrão
                                color: "black", // Cor do texto padrão
                                transition: "background-color 0.3s, color 0.3s" // Transição suave
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = tema; // Altera a cor de fundo no hover
                                e.currentTarget.style.color = "white"; // Altera a cor do texto no hover
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "white"; // Retorna a cor de fundo
                                e.currentTarget.style.color = "black"; // Retorna a cor do texto
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
