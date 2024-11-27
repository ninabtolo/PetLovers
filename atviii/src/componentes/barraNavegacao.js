import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function BarraNavegacao({ tema, botoes, seletorView }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function gerarListaBotoes() {
        return botoes.length <= 0 ? (
            <></>
        ) : (
            botoes.map((valor) => (
                <li key={valor} className="nav-item" style={{ marginLeft: 0, marginRight: "1.5rem" }}>
                    <a className="nav-link text-white fs-5 my-1" href="#" onClick={(e) => seletorView(valor, e)}>
                        {valor}
                    </a>
                </li>
            ))
        );
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: tema, marginBottom: 10, padding: "20px 25px" }}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-white fs-4">PetLovers</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    aria-controls="navbarNav"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">{gerarListaBotoes()}</ul>
                </div>
            </div>
        </nav>
    );
}

export default BarraNavegacao;
