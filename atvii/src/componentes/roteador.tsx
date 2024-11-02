import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientesTopConsumidores from "./listaConsumo";
import DadosUsuario from "./dadosUsuario";
import ConsumoUsuario from "./consumoUsuario";
import ListaProdutos from "./ListaProdutos";
import ListaServicos from "./ListaServicos";
import ListaTop5ClientesValor from "./ListaTop5ClientesValor";
import ListaProdutosServicosMaisConsumidos from "./ListaProdutosServicosMaisConsumidos";

type State = {
    tela: string;
};

export default class Roteador extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            tela: "Clientes",
        };
        this.selecionarView = this.selecionarView.bind(this);
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault();
        this.setState({
            tela: novaTela,
        });
    }

    render() {
        // Barra de navegação com os novos botões
        let barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema="#6f42c1"
                botoes={["Clientes", "Cadastros", "Perfil", "Listas"]}
            />
        );

        // Renderiza os componentes de acordo com a tela selecionada
        if (this.state.tela === "Clientes") {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#a785e2" />
                    <ListaProdutos tema="#a785e2" />
                    <ListaServicos tema="#a785e2" />
                </>
            );
        } else if (this.state.tela === "Perfil") {
            return (
                <>
                    {barraNavegacao}
                    <DadosUsuario tema="#a785e2" />
                    <ConsumoUsuario tema="#a785e2" />
                </>
            );
        } else if (this.state.tela === "Listas") {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientesTopConsumidores tema="#a785e2" />
                    <ListaTop5ClientesValor tema="#a785e2" />
                    <ListaProdutosServicosMaisConsumidos tema="#a785e2" />
                </>
            );
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#a785e2" />
                </>
            );
        }
    }
}
