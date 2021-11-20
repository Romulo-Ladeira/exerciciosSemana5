class Retangulo{
    #largura
    #altura
    constructor(largura, altura)
    {
        this.#largura = largura
        this.#altura = altura 
    }

    calcularArea(){
        return this.#altura * this.#largura
    }
}
const ret1 = new Retangulo(5,6)
const ret2 = new Retangulo(7,2)
const ret3 = new Retangulo(2,4)

const arrayRetangulos = [ret1, ret2, ret3] 

for(let i = 0;i < arrayRetangulos.length;i++){

    console.log(arrayRetangulos[i].calcularArea())

}