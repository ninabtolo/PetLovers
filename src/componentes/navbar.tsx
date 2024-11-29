import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6f42c1" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        <img
          src="/patas.png"
          alt="patas"
          style={{ height: "30px", marginRight: "10px", marginBottom: "5px" }}
        />
          Pet Lovers
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "white" }}
        >
          <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/" style={{ fontSize: "1.2rem", margin: "0 10px" }}>
                Listar 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/cadastrar" style={{ fontSize: "1.2rem", margin: "0 10px" }}>
                Cadastrar 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
