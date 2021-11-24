import { Cliente } from "../../exercicio4/scripts/Cliente.js";
import { Endereco } from "../../exercicio3/scripts/Endereco.js";

export class Conta {
     #numeroDaConta
     #saldo
     #cliente

     constructor(numeroDaconta, saldo,cliente){
        const STRING = "string"
        const NUM = "number"

        if(
            typeof numeroDaconta !== STRING||
            typeof saldo !== NUM||
            !(cliente instanceof Cliente)
        )
        {
            throw "dado inválidos"
        }
        this.#numeroDaConta = numeroDaconta
        this.#saldo = saldo
        this.#cliente = cliente
     }
     set saldo (newSaldo){
        this.#saldo = newSaldo
     }

     get saldo (){return this.#saldo}

}


const endereco = new Endereco("rua axzu","3","belem", "para", "pais", "12324343")

const cliente  = new Cliente("tibio","265725725", endereco, "5555-7777")

const conta = new Conta("23423426877", 232, cliente)

console.log(conta)