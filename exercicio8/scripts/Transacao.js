import { Endereco } from "../../exercicio3/scripts/Endereco.js"
import { Cliente } from "../../exercicio4/scripts/Cliente.js"
import {Conta} from "../../exercicio5/scripts/Conta.js"

class Trasacao {
    
    #conta
    #valorDaTransacao
    constructor(conta, valorDaTransacao){
        const NUM = "number"
        if(
            typeof valorDaTransacao !== NUM||
            !(conta instanceof Conta)
        )
        {
            throw "dados inválidos"
        }
        this.#conta = conta
        this.#valorDaTransacao = valorDaTransacao

    }

    transferencia () {
        this.#conta.saldo -= this.#valorDaTransacao
    }
    deposito () {
        this.#conta.saldo += this.#valorDaTransacao
    }

}
const endereco = new Endereco("rua axzu","3","belem", "para", "pais", "12324343")

const cliente  = new Cliente("tibio","265725725", endereco, "5555-7777")

const conta = new Conta("23423426877", 1000, cliente)

const transacao = new Trasacao(conta, 200)

console.log(conta.saldo)

transacao.deposito()

console.log(conta.saldo)

transacao.transferencia()

console.log(conta.saldo)