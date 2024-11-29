import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar";
import CadastrarCliente from "./componentes/cadastrarClientes";
import ListarClientes from "./componentes/ListarEditarExcluirClientes";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ListarClientes />} />
            <Route path="/cadastrar" element={<CadastrarCliente />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
