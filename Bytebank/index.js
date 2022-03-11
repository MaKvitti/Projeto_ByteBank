import {Cliente} from "./Cliente.js"
//import { Conta } from "./Conta/Conta.js";
//import {ContaCorrente} from "./Conta/ContaCorrente.js";
//import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
//import { Funcionario } from "./Funcionario/Funcionario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//- Teste para a parte de funcionario e autenticação.

const diretor = new Diretor('d',10000,12345678);
const gerente = new Gerente('g',5000,987654);
diretor.cadastrarsenha('12356789');
const estalogado = SistemaAutenticacao.login(diretor,"12356789");
console.log(estalogado);
const clienteconta = new Cliente('C',123451,"123");
const autenticarcliente = SistemaAutenticacao.login(clienteconta,"1235");
console.log(autenticarcliente);

//- Testes para a parte de Contas.

//const cliente1 = new Cliente("Ricardo",11122233309);
//const contaPoupanca = new ContaPoupanca(50,cliente1,1001);
//console.log(contaPoupanca);
//const cliente2 = new Cliente("Alice",88822233309)
//const ContaCorrenteRicardo = new ContaCorrente(cliente1,1001);
//ContaCorrenteRicardo.depositar(500);
//ContaCorrenteRicardo.sacar(100);
//const conta2 = new ContaCorrente(cliente2,1001);
//ContaCorrenteRicardo.transferir(200,conta2);
//console.log(ContaCorrenteRicardo);
//console.log(conta2);
//console.log(ContaCorrente.numerosdecontas);