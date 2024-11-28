import TopClientesQuantidade from "./topclientesquantidade";
import TopClientesValor from "./topclientesvalor";
import TopConsumo from "./topconsumo";
import TopConsumoPet from "./topconsumopet";

const Ranking: React.FC = () => {
    return (
      <div>
        <TopConsumoPet />
        <hr style={{ margin: "30px 0", borderColor: "#6f42c1" }} />  
        <TopClientesValor/>
        <hr style={{ margin: "30px 0", borderColor: "#6f42c1" }} />
        <TopConsumo />
        <hr style={{ margin: "30px 0", borderColor: "#6f42c1" }} />
        <TopClientesQuantidade />
      </div>
    );
  };
  
  export default Ranking;
  