import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import ListaClientes from './components/listaclientes';
import ProdutosEServicos from './components/produtoseserviços';
import Cadastros from './components/cadastros';
import Ranking from './components/ranking';
import Compra from './components/compra';


const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ProdutosEServicos />} />
                    <Route path="/compra" element={<Compra />} />
                    <Route path="/cadastro" element={<Cadastros />} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/lista" element={<ListaClientes/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
