
function totalNumberOfFibonacci(maximumCount: number) {
    let number1: number = 0;
    let number2: number = 1;
    let nextNumber: number;
    let sum: number = 0;
    for (let i = 0; i < maximumCount; i++) {
        console.log("the fibonacci sequence is: " + number1);
        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
        sum += nextNumber;
    }
    return sum;
}

let result: number = totalNumberOfFibonacci(20);
console.log("the total is: " + result);
