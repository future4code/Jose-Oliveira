// exercicio 1
//a
var printNumbersIncreasing = function (integer) {
    if (integer >= 0) {
        printNumbersIncreasing(integer - 1);
        console.log(integer);
    }
};
printNumbersIncreasing(10);
//b
var printNumbersDecreasing = function (integer) {
    if (integer >= 0) {
        console.log(integer);
        printNumbersDecreasing(integer - 1);
    }
};
printNumbersDecreasing(10);
//exercicio 2
var addAllRecursive = function (integer) {
    if (integer === 0) {
        return 0;
    }
    else {
        return integer + addAllRecursive(integer - 1);
    }
};
console.log(addAllRecursive(10));
//exercicio 3
var addAllInterative = function (integer) {
    var result = 0;
    for (var i = 0; i <= integer; i++) {
        result = result + i;
    }
    return result;
};
console.log(addAllInterative(4));
//exercicio 4
var printArray = function (array, i) {
    if (i === void 0) { i = 0; }
    console.log(array[i]);
    if (i < array.length - 1) {
        printArray(array, i + 1);
    }
};
printArray([1, 2, 3, 4, 5]);
