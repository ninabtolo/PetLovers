import React, { useEffect, useState } from "react";
import axios from "axios";

const TopClientesQuantidade: React.FC = () => {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/clientes/top10")
      .then((response) => setClientes(response.data))
      .catch((err) => alert("Erro ao buscar clientes: " + err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#6f42c1" }}>
        <img
          src="/bag.png"
          alt="Bag"
          style={{ height: "40px", marginRight: "10px", marginBottom: "5px" }}
        />
        Os 10 melhores clientes do PetLovers!
      </h2>
      <ul className="list-group">
        {clientes.map((cliente, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "white",
              color: "black",
              transition: "0.3s",
              lineHeight: "2rem"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#a785e2";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }}
          >
            <span style={{ flex: 1 }}>{cliente.nome}</span>
            <span>Total Consumido: {cliente.total_quantidade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopClientesQuantidade;
