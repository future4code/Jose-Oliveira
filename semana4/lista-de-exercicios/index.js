/*Questão 1 - interpretação
a constante meu dinheiro ira chamar a função conversor de moeda que ira receber 100 dolares como valor em
seguida a função ira pedir por prompt o valor da cotação atual do dolar e em seguida fara a conversão e ira
imprimir no console
*/

/*Questão 2 - interpretação
as constantes novoMontante e segundoMontante irão chamar a função investe Dinheiro inserindo as informações
ações, 150 e tesouro Direto, 200 respectivamente as funções em seguida irão verificar o tipo do investimento
e multiplicar o valor pela correspondente constante e em seguida ira imprimir os resultados
*/

/*questão 3 - interpretação
A ira verificar se os numeros do primeiro array são pares ou não, e colocara os numeros pares em um array e 
os impares em outro, em seguida ira imprimir a quantidade de numero no array original, no array par e no array impar
respectivament
*/
/*questão 4 - interpretação
O codigo irá ler todos os numeros do array numeros e fara com que a constante numero1 seja igual ao menor numero e a
constante numero2 seja igual ao maior numero e em seguida ira imprimir ambos os numeros
*/

/*questão 1 - Logica de programação
Para percorrer os itens de um array você pode usar o for(let i=0;i<array.length;i++), o for(let i of array) ou o array.foreach
*/
//exemplo
let arrayex = [1,2,3,4,5]

function logicaDeProgramacao(array){
for(let i=0;i<array.length;i++){
    console.log(arrayex[i])
}
}

/*Questão 2 - logica de programação
a - false
b - true
c - true
d - true
e - true
*/

/*Questão 3 - logica de programação
O codigo não funciona pois faltava adicionar o i++ o que fazia com que caisse em um loop infinito
segue correção
const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
*/

//Questão 4 - logica de programação

function trigonometria(a,b,c){
    
    if((a===b)&&(a===c)){
        console.log("equilatero")
    }else if((a!=b)&&(a!=c)&&(b!=c)){
        console.log("escaleno")
    }else{
        console.log("isosceles")
    }
}

//QUestão 5 - logica de programação

function divisibilidade(a,b){
    let maior = 0
    let menor = 0
    if(a>b){
        maior = a
        menor = b
    }else {
    maior = b
    menor = a 
  
}
console.log("O maior numero é:",maior)
console.log(menor,"não é divisivel por",maior)
if(maior%menor ===0){
    console.log(maior,"é divisivel por", menor)
}else{
    console.log(maior,"não é divisivel por", menor)
}
console.log("A diferença entre ele é:",maior-menor)
}

/*questão 1 funções
function MaiorMenor(array){
let maior = -Infinity
let imaior = 0
let menor = Infinity  
let imenor = 0
for(let i=0;i<array.length;i++){
    if(array[i]>maior){
        maior = array[i]
        imaior = i
    }
    if(array[i]<menor){
        menor = array[i]
        imenor = i
    }
}
array.splice(imaior,1)
array.splice(imenor,1)
console.log(array)
maior = -Infinity
menor = Infinity
for(let b=0;b<array.length;b++){
    if(array[b]>maior){
        maior = array[b]
    }
    if(array[b]<menor){
        menor = array[b]
    }
}
console.log("O segundo menor é:",menor)
console.log("O segundo maior é:",maior)    
}

MaiorMenor([2,3,46,7,8,222,11,3])
*/

/*Questão 2 - funções
let helloF4 = function(){
    return window.alert("Hello Future4")

}
const chamada = helloF4()
*/

/*Questão 1 - Objetos
array é uma variavel com varias variaveis dentro e objetos são variaveis com varios tipos de informações diferentes
 sobre uma unica coisa
 */

 //QUestão 2 - Objetos
 let retangulo
 function criaretangulo(a,b){
     return retangulo = {
         altura: a,
         largura: b,
         perimetro: 2*(a+b),
         area: a*b,
     }
 }

 /*questão 3 - Objetos
 const filmeFavorito = {
    Titulo: 'O mascara',
    Ano: 1994,
    Diretor:  'Chuck Russell',
    Atores: 'Jim Carrey, Cameron Diaz, Richard Jeni e Peter Greene'
}
console.log("Venha assistir ao filme",filmeFavorito.Titulo,"de",filmeFavorito.Ano,"dirigido por",filmeFavorito.Diretor,
"e estrelado por",filmeFavorito.Atores)
*/

//questão 4 - Objetos
const pessoaQualquer = [{
    Nome: 'Rafael',
    idade: 27,
    email: 'aceitaesseid@Hotmail.com',
    endereço: 'Rua dos bobos numero 0'
}]

const anonimizarPessoa = pessoaQualquer.map((anonimo) => {
    anonimo.Nome = "Anonimo"
})

//Questão 1 - funções de array
const criancasEAdultos = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//a
const adultos = criancasEAdultos.filter((adultos)=>{
    if(adultos.idade>=20){
    return true
    }else return false    
}
)
//b
const criancas = criancasEAdultos.filter((criancas)=>{
    if(criancas.idade<20){
    return true
    }else return false    
}
)