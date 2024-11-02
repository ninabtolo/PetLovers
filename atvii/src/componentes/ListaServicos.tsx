import { Component } from "react";

type Props = {
    tema: string;
};

class ListaServicos extends Component<Props> {
    render() {
        const servicos = [
            { nome: "Serviço 1", consumo: 150 },
            { nome: "Serviço 2", consumo: 130 },
            { nome: "Serviço 3", consumo: 85 },
            // ... mais serviços
        ];
        
        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <h3
                    style={{
                        fontSize: "2.2rem", // Aumenta o tamanho da fonte do título
                        fontWeight: "bold", // Deixa o título em negrito
                        color: this.props.tema, // Cor do tema para o título
                        textAlign: "center", // Centraliza o título
                        textShadow: "1px 1px 5px rgba(0, 0, 0, 0.1)", // Adiciona sombra ao texto
                        marginBottom: "20px", // Espaçamento inferior
                        marginTop: "30px" 
                    }}
                >
                    Serviços Disponíveis
                </h3>
                <div className="list-group">
                    {servicos.map((servico) => (
                        <a
                            key={servico.nome}
                            href="#"
                            className="list-group-item list-group-item-action"
                            style={{
                                padding: "15px 20px", // Ajusta a altura
                                fontSize: "1.25rem", // Aumenta o tamanho da fonte dos itens da lista
                                color: "black" // Cor do texto padrão
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = this.props.tema; // Altera a cor de fundo no hover
                                e.currentTarget.style.color = "white"; // Altera a cor do texto no hover
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = "white"; // Retorna a cor de fundo
                                e.currentTarget.style.color = "black"; // Retorna a cor do texto
                            }}
                        >
                            {servico.nome} - {servico.consumo} unidades
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListaServicos;
