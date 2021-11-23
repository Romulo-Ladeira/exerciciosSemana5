import {Endereco} from '../../exercicio3/scripts/Endereco.js'

class Cliente{
    #nome
    #cpf
    #endereco
    #telefone

    constructor(nome, cpf, endereco, telefone){
        const STRING = "string"

        if(typeof nome !== STRING||
           typeof cpf !== STRING||
           !(endereco instanceof Endereco)||
           typeof telefone !== STRING
        ){
            throw "dados incorretos"
        }
        this.#nome = nome
        this.#cpf = cpf
        this.#endereco = endereco
        this.#telefone = telefone
    }
    
}

const endereco = new Endereco("rua axzu","3","belem", "para", "pais", "12324343")

const cliente  = new Cliente("tibio","265725725", "{nome: fatima}", "5555-7777")

console.log(cliente)