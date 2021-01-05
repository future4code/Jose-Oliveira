console.log("Letra a: vai dar erro, pois o valor atribuido deve ser igual ao tipo valor declarado")
console.log("letra b: adicionando `|string` apos a tipagem number")

//letra c

const descricao:{nome:string,idade:number,corFavorita:string}={
    nome:"Rafael",
    idade:27,
    corFavorita:"preto"
}

//letra d

type pessoa = {
    nome:string,
    idade: number,
    corFavorita:string
}

const alguem1:pessoa ={
    nome:"zak",
    idade: 26,
    corFavorita:"azul"
}
const alguem2:pessoa ={
    nome:"leam",
    idade: 28,
    corFavorita:"azul"
}
const alguem3:pessoa ={
    nome:"abel",
    idade: 25,
    corFavorita:"azul"
}

//letra e

enum CoresArcoIris{
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}

type pessoaComEnum = {
    nome:string,
    idade: number,
    corFavorita:string
}

const alguem4:pessoaComEnum ={
    nome:"zak",
    idade: 26,
    corFavorita:CoresArcoIris.AZUL
}
const alguem5:pessoaComEnum ={
    nome:"leam",
    idade: 28,
    corFavorita:CoresArcoIris.ANIL
}
const alguem6:pessoaComEnum ={
    nome:"abel",
    idade: 25,
    corFavorita:CoresArcoIris.LARANJA
}