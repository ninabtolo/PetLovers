import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#6f42c1', padding: '15px 20px' }}>
            <div className="container-fluid">
                <a className="navbar-brand text-white d-flex align-items-center" href="/" style={{ fontSize: '2rem' }}>
                    <img
                        src="/patas.png"
                        alt="Patas"
                        style={{ height: '50px', marginRight: '15px' }}
                    />
                    <span style={{ fontFamily: 'Cookie, cursive', fontSize: '2.5rem' }}>PetLovers</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ border: 'none' }}
                >
                    <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/produtos" style={{ fontSize: '1.2rem', margin: '0 10px'}}>
                                Produtos/serviços
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/compra" style={{ fontSize: '1.2rem', margin: '0 10px'}}>
                                Compras
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/cadastro" style={{ fontSize: '1.2rem', margin: '0 10px' }}>
                                Cadastros
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/lista" style={{ fontSize: '1.2rem', margin: '0 10px' }}>
                                Clientes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/ranking" style={{ fontSize: '1.2rem', margin: '0 10px' }}>
                                Ranking
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

