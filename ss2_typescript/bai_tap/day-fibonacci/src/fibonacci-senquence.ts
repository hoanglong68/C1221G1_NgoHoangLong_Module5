// let num: number = 20;
// let nextNum: number;
// let num1: number = 0;
// let num2: number = 1;
// for (let i = 0; i < num; i++) {
//     console.log(num1);
//     nextNum = num1 + num2;
//     num1 = num2;
//     num2 = nextNum;
// }

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
