/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h2
                    style={{
                        fontSize: "2.2rem", // Aumenta o tamanho da fonte do título
                        fontWeight: "bold", // Deixa o título em negrito
                        color: tema, // Cor do tema para o título
                        textAlign: "center", // Centraliza o título
                        marginBottom: "20px", // Espaçamento inferior
                        marginTop: "30px",
                    }}
                >
                    Lista de Clientes
                </h2>
                <div className="list-group">
                    {[...Array(6)].map((_, index) => (
                        <a
                            key={`cliente-${index + 1}`}
                            href="#"
                            className="list-group-item list-group-item-action"
                            style={{
                                padding: "15px 20px", // Aumenta o padding para aumentar a altura
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
                            Cliente {index + 1}
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
