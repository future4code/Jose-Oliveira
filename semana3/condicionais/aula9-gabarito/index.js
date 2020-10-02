/*Questão 1 de interpretação
O codigo imprime o resto da divisao  por 2 do numero digitado pelo usuario
se o resto for 0 a mensagem de aprovacao no teste aparace, se o resto for 1
aparece uma mensagem de reprovação, na pratica o codigo verifica se o numero
digitado é par(aprovado) ou impar(reprovado)
*/

/*Questão 2 de interpretação
a.O codigo pergunta ao usuario o nome de uma fruta e imprime como resposta o
preço da fruta escolhida
b. O preço da fruta maça é R$ 2.25
c. O preço da fruta maça é R$ 5
*/

/*QUestão 3 de interpretação
a. esta pedindo para o usuario digitar um numero e salvado-o como uma variavel do tipo numero
b. Esse numero passou no teste 
   Nada acontecera
c. havera um erro dizendo que a variavel mensagem nao foi declarada, pois o codigo cria ela dentro
do escopo  de um par de{} e tenta executar essa mesma variavel do lado de fora
   */

/*Questão 4 de escrita
const idade = Number(prompt("Qual a sua idade?"))
if (idade >= 18){
    console.log("voce pode dirigir")
}else(console.log("voce não pode dirigir"))
*/

/*Questão 5 de escrita
const turno = prompt("qual turno voce estuda? digite M para matutino, V para vespertino ou N para noturno")
if(turno === 'M'){
    console.log("Bom dia!")
}else{
    if(turno === 'V'){
        console.log("Boa tarde!")
    }else{
        if(turno === 'N'){
        console.log("Boa noite")
    }
    }
}
*/

/*Questão 6 de escrita
const turno = prompt("qual turno voce estuda? digite M para matutino, V para vespertino ou N para noturno")
let mensagem = undefined
switch(turno){  
    case "M":
    mensagem = "Bom dia!"
    break;
    case "V":
    mensagem = "Boa tarde!"
    break;
    case "N":
    mensagem = "Boa noite!"
    break;
}

console.log(mensagem)
*/

/*Questao 7 de escrita
const genero = prompt("qual o genero do filme que irão assistir?")
const ingresso = Number(prompt("qual o ´preço do filme que irão assistir?"))
if(genero === 'fantasia' && ingresso < 15){
    console.log("Bom filme")
}else{
    console.log("escolha outro filme :(")
}
*/