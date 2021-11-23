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
        if(Endereco.validaCEP(cep)){
            throw "CEP inválidoo" 
        }

        this.#logradouro = logradouro
        this.#numero = numero
        this.#cidade = cidade
        this.#estado = estado
        this.#pais = pais
        this.#cep = cep

    }
    static validaCEP(cep) {
        const tamanho = cep.length
        if (tamanho !== 9 || cep[5] !== '-') {
          return true
        }
    
        for (let i = 0; i < tamanho; i++) {
          if (i !== 5) {
            if (cep[i] < '0' || cep[i] > '9') {
              return true
            }
          }
        }
    
        return false
      }
    
    get logradouro(){ return this.#logradouro}
}
const endereco = new Endereco("rua axzu","3","belem", "para", "pais", "3333-454")