import { Endereco } from "../../exercicio3/scripts/Endereco.js"
import { Cliente } from "../../exercicio4/scripts/Cliente.js"
import {Conta} from "../../exercicio5/scripts/Conta.js"

class Transacao {
    static novoId = 0
    #idDeTransacao 
    #contaTransferencia
    #data
    #conta
    #valorDaTransacao
    constructor(conta, valorDaTransacao, contaTransferencia){
        const NUM = "number"
        if(
            typeof valorDaTransacao !== NUM||
            !(conta instanceof Conta)||
            !(contaTransferencia instanceof Conta || contaTransferencia === undefined)

        )
        {
            throw "dados inválidos"
        }
        this.#conta = conta
        this.#valorDaTransacao = valorDaTransacao
        this.#idDeTransacao = Transacao.novoId++
        this.#data = Transacao.geraData()
        this.#contaTransferencia = contaTransferencia

    }
    get valorDaTransacao(){return this.#valorDaTransacao}
    get contaTransferencia(){return this.#contaTransferencia}
    transferencia () {
        
        if(Transacao.verificarValor(this.#valorDaTransacao)){return}
        
        this.#conta.saldo -= this.#valorDaTransacao
        this.#contaTransferencia.saldo += this.#valorDaTransacao
        console.log("transferencia realizada")
        
    }
    deposito () {
        if(Transacao.verificarValor(this.#valorDaTransacao)){return}

        Transacao.verificarValor(this.valorDaTransacao)
        this.#conta.saldo += this.#valorDaTransacao
        console.log("deposito realizado")
    }
    executarTransacao() {
        if(this.#contaTransferencia  === undefined)
        {
            this.deposito()
        }
        else
        {
            this.transferencia()
        }
    }
    static verificarValor(valor){
        if(valor < 0 || valor > 300)
        {
            alert("Valor inválido")
            return true
        }
    }


    static geraData(){
        let data = new Date()
        let dia = data.getDate()
        let mes = data.getMonth() + 1
        let hora = data.getHours()
        let minutos = data.getMinutes()

        return `${dia}/${mes}-${hora}:${minutos}`

    }

}
const endereco = new Endereco("rua axzu","3","belem", "para", "pais", "12324343")

const cliente  = new Cliente("tibio","265725725", endereco, "5555-7777")

const conta = new Conta("23423426877", 1000, cliente)

const conta2 = new Conta("23423423437", 1500, cliente)

const transacao = new Transacao(conta, 200, conta2 )

const transacao2 = new Transacao(conta, 200)

transacao.executarTransacao()

transacao2.executarTransacao()




/*console.log(conta.saldo)

console.log(conta2.saldo)

transacao.transferencia()

console.log(conta.saldo)

console.log(conta2.saldo)
*/
