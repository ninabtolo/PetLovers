import React from "react";

function FormularioCadastroCliente({ tema }) {
    return (
        <div className="container-fluid">
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: tema, textAlign: "center", marginBottom: "20px", marginTop: "30px" }}>
                Cadastre-se
            </h2>

            <form>
                <div className="input-group mb-3" style={{ padding: "10px 0" }}>
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" style={{ height: "50px" }} />
                </div>
                <div className="input-group mb-3" style={{ padding: "10px 0" }}>
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" style={{ height: "50px" }} />
                </div>
                <div className="input-group mb-3" style={{ padding: "10px 0" }}>
                    <span className="input-group-text" style={{ background: tema, color: "white" }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" style={{ height: "50px" }} />
                </div>
                <div className="input-group mb-3" style={{ padding: "10px 0" }}>
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ background: tema, height: "50px", fontSize: "1rem", color: "white" }}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormularioCadastroCliente;
