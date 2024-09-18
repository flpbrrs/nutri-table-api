import Id from "../shared/Id"

export default class Alimento {
    id: string
    nome: string
    pesoBase: number
    energia: number
    proteinas: number
    carboidratos: number
    gorduras: number

    constructor(
        nome: string,
        pesoBase: number,
        energia: number,
        proteinas: number,
        carboidratos: number,
        gorduras: number
    ) {
        this.id = Id.gerar()
        this.nome = nome
        this.pesoBase = pesoBase
        this.energia = energia
        this.proteinas = proteinas
        this.carboidratos = carboidratos
        this.gorduras = gorduras
    }
}


/*

vbp --- m g
  p --- x g

 vb.x = p.m

 x = p.vbm / vbp
*/