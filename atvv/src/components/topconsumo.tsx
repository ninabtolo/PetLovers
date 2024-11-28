import React, { useEffect, useState } from "react";
import axios from "axios";

const TopConsumo: React.FC = () => {
  const [consumos, setConsumos] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/consumos/top")
      .then((response) => setConsumos(response.data))
      .catch((err) => alert("Erro ao buscar os itens mais consumidos: " + err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#6f42c1" }}>
        <img
          src="/cart.png"
          alt="Cart"
          style={{ height: "40px", marginRight: "10px", marginBottom: "5px" }}
        />
        Produtos e Serviços Mais Consumidos
      </h2>
      <ul className="list-group mt-4">
        {consumos.map((item, index) => (
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
            <span style={{ flex: 1 }}>{item.item}</span>
            <span>Total Consumido: {item.total_consumido}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopConsumo;

