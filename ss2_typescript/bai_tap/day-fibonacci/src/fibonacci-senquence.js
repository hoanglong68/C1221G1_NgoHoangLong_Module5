var number1 = 0;
var number2 = 1;
var nextNumber;
var sum = 0;
var arrFibonacci = [];
function totalNumberOfFibonacci(maximumCount) {
    var size = maximumCount;
    if (size > 0) {
        arrFibonacci.push(number1);
        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
        size = size - 1;
        totalNumberOfFibonacci(size);
    }
    return arrFibonacci;
}
function sumFibonacciSequence(array) {
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
;
arrFibonacci = totalNumberOfFibonacci(20);
console.log(arrFibonacci);
sum = sumFibonacciSequence(arrFibonacci);
console.log(sum);
