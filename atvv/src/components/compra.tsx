import React, { useEffect, useState } from "react";
import axios from "axios";

const Compra: React.FC = () => {
  const [clientes, setClientes] = useState<any[]>([]);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [servicos, setServicos] = useState<any[]>([]);
  const [clienteId, setClienteId] = useState<number | null>(null);
  const [itemId, setItemId] = useState<number | null>(null);
  const [itemType, setItemType] = useState<string>("produto");
  const [quantidade, setQuantidade] = useState<number>(1);

  useEffect(() => {
    axios.get("http://localhost:3001/clientes").then((response) => {
      setClientes(response.data);
    });
    axios.get("http://localhost:3001/produtos").then((response) => {
      setProdutos(response.data);
    });
    axios.get("http://localhost:3001/servicos").then((response) => {
      setServicos(response.data);
    });
  }, []);

  const handleConfirmarCompra = () => {
    const consumo = {
      cliente_id: clienteId,
      produto_id: itemType === "produto" ? itemId : null,
      servico_id: itemType === "servico" ? itemId : null,
      quantidade,
    };

    axios
      .post("http://localhost:3001/consumos", consumo)
      .then(() => alert("Compra registrada com sucesso!"))
      .catch((err) => alert("Erro ao registrar compra: " + err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center" style={{ color: "#6f42c1" }}>
      <img
          src="/sell.png"
          alt="sell"
          style={{ height: "30px", marginRight: "10px", marginBottom: '5px' }}
        />
        Registrar Compra
      </h2>
      <div className="form-group mt-4">
        <label>Cliente:</label>
        <select
          className="form-control"
          value={clienteId || ""}
          onChange={(e) => setClienteId(Number(e.target.value))}
        >
          <option value="">Selecione um cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mt-3">
        <label>Tipo de Item:</label>
        <select
          className="form-control"
          value={itemType}
          onChange={(e) => {
            setItemType(e.target.value);
            setItemId(null);
          }}
        >
          <option value="produto">Produto</option>
          <option value="servico">Serviço</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label>{itemType === "produto" ? "Produto:" : "Serviço:"}</label>
        <select
          className="form-control"
          value={itemId || ""}
          onChange={(e) => setItemId(Number(e.target.value))}
        >
          <option value="">
            Selecione um {itemType === "produto" ? "produto" : "serviço"}
          </option>
          {(itemType === "produto" ? produtos : servicos).map((item) => (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mt-3">
        <label>Quantidade:</label>
        <input
          type="number"
          className="form-control"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          min={1}
        />
      </div>
      <button
        className="btn text-white mt-4"
        style={{ backgroundColor: "#6f42c1" }}
        onClick={handleConfirmarCompra}
        disabled={!clienteId || !itemId}
      >
        Confirmar Compra
      </button>
    </div>
  );
};

export default Compra;
