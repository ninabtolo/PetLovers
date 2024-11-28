import React, { useEffect, useState } from "react";
import axios from "axios";

const TopConsumoPet: React.FC = () => {
  const [consumos, setConsumos] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/consumos/por-pet")
      .then((response) => setConsumos(response.data))
      .catch((err) => alert("Erro ao buscar consumos: " + err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#6f42c1" }}>
        <img
          src="/savings.png"
          alt="savings"
          style={{ height: "40px", marginRight: "10px", marginBottom: "5px" }}
        />
        Produtos e Serviços mais Consumidos por Tipo e Raça
      </h2>
      <div className="mt-4">
        {consumos.map((consumo, index) => (
          <div
            key={index}
            className="list-group-item"
            style={{
              backgroundColor: "white",
              color: "black",
              marginBottom: "10px",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              transition: "0.3s",
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
            <h5 style={{ marginBottom: "8px", fontSize: "1rem" }}>
              Tipo de Pet: {consumo.tipo_pet} | Raça: {consumo.raca || "Indefinido"}
            </h5>
            <p style={{ margin: 0 }}>
              <strong>Item:</strong> {consumo.item}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Total Consumido:</strong> {consumo.total_consumido}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopConsumoPet;
