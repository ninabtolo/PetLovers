import CadastroProdutoServico from "./cadastropes";
import CadastroClientes from "./formclientes";

const Cadastros: React.FC = () => {
    return (
      <div>
        <CadastroClientes />
        <hr style={{ margin: "30px 0", borderColor: "#6f42c1" }} />
        <CadastroProdutoServico />
      </div>
    );
  };

export default Cadastros;