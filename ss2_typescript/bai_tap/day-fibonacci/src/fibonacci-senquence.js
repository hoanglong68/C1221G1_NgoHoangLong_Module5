var number1 = 0;
var number2 = 1;
var nextNumber;
var sum = 0;
function totalNumberOfFibonacci(maximumCount) {
    var size = maximumCount;
    if (size > 0) {
        console.log("the fibonacci sequence is: " + number1);
        sum += number1;
        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
        size = size - 1;
        totalNumberOfFibonacci(size);
    }
    else {
        console.log("total is: " + sum);
    }
}
totalNumberOfFibonacci(20);
// console.log("the total is: " + result);
