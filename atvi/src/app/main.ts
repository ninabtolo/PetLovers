import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import ExclusaoCliente from "../negocio/exclusaoCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProduto";
import AtualizarProduto from "../negocio/atualizacaoProduto";
import ExclusaoProduto from "../negocio/exclusaoProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServico";
import AtualizarServico from "../negocio/atualizacaoServico";
import ExclusaoServico from "../negocio/exclusaoServico";
import CadastroPet from "../negocio/cadastroPet";
import ListagemPets from "../negocio/listagemPets";
import AtualizarPet from "../negocio/atualizacaoPet";
import ExclusaoPet from "../negocio/exclusaoPets";
import ListagemTopClientesPorValor from "../negocio/listagemClientesQueMaisConsumiram";
import ListagemTopClientesPorQuantidade from "../negocio/listagemdezclientes";
import ListagemProdutosMaisConsumidos from "../negocio/listagemProdutosMaisConsumidos";
import ListagemServicosMaisConsumidos from "../negocio/listagemServicosMaisConsumidos";
import ListagemPorTipoRacaDePet from "../negocio/listagemPorTipoPet";
import Compra from "../negocio/compra";

console.log(`Bem-vindo ao sistema de gerenciamento de pet shops e clínicas veterinárias`);

let empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`7 - Cadastrar pet`);
    console.log(`8 - Listar todos os pets`);
    console.log(`9 - Atualizar cliente`);
    console.log(`10 - Excluir cliente`);
    console.log(`11 - Atualizar produto`);
    console.log(`12 - Excluir produto`);
    console.log(`13 - Atualizar serviço`);
    console.log(`14 - Excluir serviço`);
    console.log(`15 - Atualizar pet`);
    console.log(`16 - Excluir pet`);
    console.log(`17 - Listar os 5 clientes que mais consumiram em valor`);
    console.log(`18 - Listar os 10 clientes que mais consumiram em quantidade`);
    console.log(`19 - Listar os produtos mais consumidos`);
    console.log(`20 - Listar os serviços mais consumidos`);
    console.log(`21 - Listar os serviços/produtos mais consumidos por tipo e raça de pet`);
    console.log(`22 - Registrar compra de um cliente`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Escolha uma opção: `);

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes);
            listagemClientes.listar();
            break;
        case 3:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 6:
            let listagemServicos = new ListagemServicos(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 7:
            let cadastroPet = new CadastroPet(empresa.getClientes[0]); 
            cadastroPet.cadastrarPet();
            break;
        case 8:
            let listagemPets = new ListagemPets(empresa.getClientes[0].getPets);
            listagemPets.listar();
            break;
        case 9:
            let atualizarCliente = new AtualizacaoCliente(empresa.getClientes);
            atualizarCliente.atualizar();
            break;
        case 10:
            let excluirCliente = new ExclusaoCliente(empresa.getClientes);
            excluirCliente.deletar();
            break;
        case 11:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos);
            atualizarProduto.atualizar();
            break;
        case 12:
            let excluirProduto = new ExclusaoProduto(empresa.getProdutos);
            excluirProduto.deletar();
            break;
        case 13:
            let atualizarServico = new AtualizarServico(empresa.getServicos);
            atualizarServico.atualizar();
            break;
        case 14:
            let excluirServico = new ExclusaoServico(empresa.getServicos);
            excluirServico.deletar();
            break;
        case 15:
            let atualizarPet = new AtualizarPet(empresa.getClientes[0]); 
            atualizarPet.atualizar();
            break;
        case 16:
            let excluirPet = new ExclusaoPet(empresa.getClientes[0]); 
            excluirPet.deletar();
            break;
        case 17:
            let listagemTopClientesValor = new ListagemTopClientesPorValor(empresa.getClientes);
            listagemTopClientesValor.listar();
            break;
        case 18:
            let listagemTopClientesQuantidade = new ListagemTopClientesPorQuantidade(empresa.getClientes);
            listagemTopClientesQuantidade.listar();
            break;
        case 19:
            let listagemProdutosMaisConsumidos = new ListagemProdutosMaisConsumidos(empresa.getClientes);
            listagemProdutosMaisConsumidos.listar();
            break;
        case 20:
            let listagemServicosMaisConsumidos = new ListagemServicosMaisConsumidos(empresa.getClientes);
            listagemServicosMaisConsumidos.listar();
            break;
        case 21:
            let listagemPorTipoRaca = new ListagemPorTipoRacaDePet(empresa.getClientes);
            listagemPorTipoRaca.listar();
            break;
        case 22: 
            let registrarCompra = new Compra(empresa.getClientes, empresa.getProdutos, empresa.getServicos); 
            registrarCompra.registrarCompra(); 
            break;
        
        case 0:
            execucao = false;
            console.log(`Até mais!`);
            break;

        default:
            console.log(`Opção inválida.`);
    }
}
