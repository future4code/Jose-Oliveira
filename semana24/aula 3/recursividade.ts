// exercicio 1
//a
const printNumbersIncreasing = (integer:number)=>{
if(integer>=0){
printNumbersIncreasing(integer-1)
console.log(integer)
}
}

printNumbersIncreasing(10)

//b
const printNumbersDecreasing = (integer:number)=>{
    if(integer>=0){
    console.log(integer)
    printNumbersDecreasing(integer-1)
    
    }
    }
    
    printNumbersDecreasing(10)

//exercicio 2
const addAllRecursive =(integer:number):number =>{
    if(integer ===0){
   return 0
}else{
 return integer + addAllRecursive(integer-1)
}
}

console.log(addAllRecursive(10))

//exercicio 3
const addAllInterative = (integer:number) =>{
let result = 0
for(let i = 0;i<=integer;i++){
   result = result + i
}
return result
}

console.log(addAllInterative(4))

//exercicio 4
const printArray =(array:number[], i=0)=>{
    console.log(array[i])
    if(i < array.length -1){
     printArray(array, i+1)
}   
}
printArray([1,2,3,4,5])