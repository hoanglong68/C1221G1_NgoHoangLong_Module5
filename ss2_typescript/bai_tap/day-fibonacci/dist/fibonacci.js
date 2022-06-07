function totalNumberOfFibonacci(maximumCount) {
    let number1 = 0;
    let number2 = 1;
    let nextNumber;
    let sum = 0;
    for (let i = 0; i < maximumCount; i++) {
        console.log("the fibonacci sequence is: " + number1);
        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
        sum += nextNumber;
    }
    return sum;
}
let result = totalNumberOfFibonacci(20);
console.log(result);
//# sourceMappingURL=fibonacci-senquence.js.map
