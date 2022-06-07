
function totalNumberOfFibonacci(maximumCount) {
    var number1 = 0;
    var number2 = 1;
    var nextNumber;
    var sum = 0;
    for (var i = 0; i < maximumCount; i++) {
        console.log("the fibonacci sequence is: " + number1);
        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
        sum += nextNumber;
    }
    return sum;
}

var result = totalNumberOfFibonacci(20);
console.log("the total is: " + result);
