import React from "react";
import ListaProdutos from "./listaprodutos";
import ListaServicos from "./listaservicos";

const ProdutosEServicos: React.FC = () => {
  return (
    <div>
      <ListaProdutos />
      <hr style={{ margin: "30px 0", borderColor: "#6f42c1" }} />
      <ListaServicos />
    </div>
  );
};

export default ProdutosEServicos;
