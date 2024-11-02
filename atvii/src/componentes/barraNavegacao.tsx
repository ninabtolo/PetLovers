/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
};

type state = {
    isCollapsed: boolean; // Estado para controlar o colapso
};

export default class BarraNavegacao extends Component<props, state> {
    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            isCollapsed: true // Inicialmente colapsado
        };
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this); // Bind do método de colapso
    }

    gerarListaBotoes() {
        return this.props.botoes.length <= 0 ? (
            <></>
        ) : (
            this.props.botoes.map(valor => (
                <li key={valor} className="nav-item" style={{ marginLeft: 0, marginRight: "1.5rem" }}> {/* Ajusta o espaçamento entre itens */}
                    <a
                        className="nav-link text-white fs-4 my-1"
                        href="#"
                        onClick={(e) => this.props.seletorView(valor, e)}
                    >
                        {valor}
                    </a>
                </li>
            ))
        );
    }

    toggleCollapse() {
        this.setState((prevState) => ({
            isCollapsed: !prevState.isCollapsed
        }));
    }

    render() {
        return (
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    backgroundColor: this.props.tema,
                    marginBottom: 10,
                    padding: "20px 25px" // Aumenta a altura da navbar
                }}
            >
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white fs-3">PetLovers</span> {/* Aumenta a fonte do título */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.toggleCollapse} // Chamando toggleCollapse ao clicar
                        aria-controls="navbarNav"
                        aria-expanded={!this.state.isCollapsed} // Controla o estado de expansão
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${this.state.isCollapsed ? '' : 'show'}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {this.gerarListaBotoes()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
