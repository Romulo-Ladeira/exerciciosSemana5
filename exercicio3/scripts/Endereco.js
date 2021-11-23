 export class Endereco{
    #logradouro
    #numero
    #cidade
    #estado
    #pais
    #cep
    constructor(logradouro, numero, cidade, estado, pais,cep ){
        const STR = 'string'
        
        if(
            typeof logradouro !== STR ||
            typeof numero !== STR ||
            typeof cidade !== STR ||
            typeof estado !== STR ||
            typeof pais !== STR ||
            typeof cep !== STR 
            ){
               throw  'Endereço invalido'
            }

        this.#logradouro = logradouro
        this.#numero = numero
        this.#cidade = cidade
        this.#estado = estado
        this.#pais = pais
        this.#cep = cep
    }
    get logradouro(){ return this.#logradouro}
}