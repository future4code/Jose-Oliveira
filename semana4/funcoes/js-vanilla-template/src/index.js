/*Questão 1 - interpretação
a.10
  50
b.A conta seria feita, mas nada seria impresso no console
*/

/*questão 2 - interpretação
a.darvas
  Caio
b.Amanda
Caio
*/

/*Questão 3 - interpretação
A função recebe uma array e cria uma nova array composta pelos numeros pares elevados ao quadrado
um nome alternativo poderia ser parAoQuadrado
*/

/*Questão 4 - escrita
  a.function apresentacao(){
     console.log("Eu sou Rafael, tenho 27 anos, moro em Lauro de Freitas e sou estudante.")
    }

apresentacao()


b.let apresentacao = (a,b,c) =>{
    let d =undefined   
    if (c===true){
    d = "sou"
    }else d = "não sou"
   return console.log("Eu sou",a, "tenho anos, moro em",b,"e",d,"estudante" )
}
apresentacao()
*/

/*Questão 5 - escrita
a.let soma = (a,b) =>{
return a+b
}
console.log(soma(5,6))


b.let comparar = (a,b) =>{
    return a>b
}


c.let mensagem = (a) =>{
    for(let i =0; i<10; i++){
        console.log(a)
    }
}
console.log(mensagem(""))
*/

/*Questão 6
a.const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let tamanhoArray = (array)=>{
return array.length
}
console.log(tamanhoArray(array))

b.let paridade = (a)=>{
let divisao = a%2
if (divisao===0){
    return true   
}else {return false}
}

c.const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let pares = 0
let paridadeDoArray = (array)=>{
    for(let i=0; i<array.length; i++){
        let resto = array[i]%2

        if(resto ===0){
        pares++
        }
 
    }  return pares
}
console.log(paridadeDoArray(array))
*/
