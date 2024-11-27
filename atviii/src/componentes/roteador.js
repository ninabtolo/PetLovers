import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientesTopConsumidores from "./listaClientesTopConsumidores";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import ListaTop5ClientesValor from "./listaTop5ClientesValor";
import ListaProdutosServicosMaisConsumidos from "./listaProdutosServicosMaisConsumidos";

function Roteador() {
    const [tela, setTela] = useState("Clientes");
    const selecionarView = (novaTela, evento) => {
        evento.preventDefault();
        setTela(novaTela);
    };

    const tema = "#a785e2";
    const barraNavegacao = (
        <BarraNavegacao seletorView={selecionarView} tema="#6f42c1" botoes={["Clientes", "Cadastros", "Listas"]} />
    );

    if (tela === "Clientes") {
        return (
            <>
                {barraNavegacao}
                <ListaCliente tema={tema} />
                <ListaProdutos tema={tema} />
                <ListaServicos tema={tema} />
            </>
        );
    } else if (tela === "Listas") {
        return (
            <>
                {barraNavegacao}
                <ListaClientesTopConsumidores tema={tema} />
                <ListaTop5ClientesValor tema={tema} />
                <ListaProdutosServicosMaisConsumidos tema={tema} />
            </>
        );
    } else {
        return (
            <>
                {barraNavegacao}
                <FormularioCadastroCliente tema={tema} />
            </>
        );
    }
}

export default Roteador;
