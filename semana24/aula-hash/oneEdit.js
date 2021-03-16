var isOneEdit = function (stringA, stringB) {
    if (Math.abs(stringA.length - stringB.length) > 1)
        return false;
    var charsDiffCount = 0;
    for (var i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i])
            charsDiffCount++;
    }
    if (charsDiffCount > 1) {
        return false;
    }
    else
        return true;
};
console.log(isOneEdit("banana", "banana"));
