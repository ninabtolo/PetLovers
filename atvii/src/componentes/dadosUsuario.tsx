import React, { Component } from "react";

type Props = {
    tema: string;
};

type State = {
    editMode: boolean;
    usuario: {
        nome: string;
        nomeSocial: string;
        email: string;
        telefone: string;
        endereco: string;
        pet: string;
    };
};

class DadosUsuario extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editMode: false,
            usuario: {
                nome: "João Silva",
                nomeSocial: "Joãozinho",
                email: "joao.silva@email.com",
                telefone: "(11) 91234-5678",
                endereco: "Rua das Flores, 123",
                pet: "cachorro",
            },
        };

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    toggleEditMode() {
        this.setState({ editMode: !this.state.editMode });
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            usuario: { ...prevState.usuario, [name]: value },
        }));
    }

    handleSave() {
        alert("Dados salvos com sucesso!");
        this.toggleEditMode();
    }

    render() {
        const { tema } = this.props;
        const { editMode, usuario } = this.state;

        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
                <h3
                    style={{
                        fontSize: "2rem",
                        color: tema,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: "20px",
                        marginTop: "30px",
                    }}
                >
                    Dados do Usuário
                </h3>
                <div
                    className="p-4"
                    style={{
                        backgroundColor: tema,
                        color: "white",
                        borderRadius: "5px",
                        fontSize: "1rem",
                    }}
                >
                    {editMode ? (
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Nome:</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        className="form-control"
                                        value={usuario.nome}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Nome Social:</label>
                                    <input
                                        type="text"
                                        name="nomeSocial"
                                        className="form-control"
                                        value={usuario.nomeSocial}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={usuario.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Telefone:</label>
                                    <input
                                        type="text"
                                        name="telefone"
                                        className="form-control"
                                        value={usuario.telefone}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Endereço:</label>
                                    <input
                                        type="text"
                                        name="endereco"
                                        className="form-control"
                                        value={usuario.endereco}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Pet:</label>
                                    <select
                                        name="pet"
                                        className="form-control"
                                        value={usuario.pet}
                                        onChange={this.handleChange}
                                    >
                                        <option value="">Selecione o tipo de pet</option>
                                        <option value="cachorro">Cachorro</option>
                                        <option value="gato">Gato</option>
                                        <option value="passaro">Pássaro</option>
                                        <option value="coelho">Coelho</option>
                                        <option value="chinchila">Chinchila</option>
                                        <option value="hamster">Hamster</option>
                                        <option value="iguana">Iguana</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <button
                                    className="btn btn-light"
                                    style={{ color: "black" }}
                                    onClick={this.handleSave}
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <p>
                                    <strong>Nome:</strong> {usuario.nome}
                                </p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <p>
                                    <strong>Nome Social:</strong> {usuario.nomeSocial}
                                </p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <p>
                                    <strong>Email:</strong> {usuario.email}
                                </p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <p>
                                    <strong>Telefone:</strong> {usuario.telefone}
                                </p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <p>
                                    <strong>Endereço:</strong> {usuario.endereco}
                                </p>
                            </div>
                            <div className="col-md-6 mb-3">
                                <p>
                                    <strong>Pet:</strong> {usuario.pet}
                                </p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <button
                                    className="btn btn-light"
                                    style={{ color: "black" }}
                                    onClick={this.toggleEditMode}
                                >
                                    Editar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default DadosUsuario;

