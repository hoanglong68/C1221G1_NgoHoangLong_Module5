let number1: number = 0;
let number2: number = 1;
let nextNumber: number;
let sum: number = 0;
function totalNumberOfFibonacci(maximumCount: number) {
    let size = maximumCount;
    if (size > 0) {
        console.log("the fibonacci sequence is: " + number1);
        sum += number1;
        nextNumber = number1 + number2;
        number1 = number2;
        number2 = nextNumber;
            size = size - 1;
            totalNumberOfFibonacci(size);
    }else {
            console.log("total is: "+sum);
        }
}

 totalNumberOfFibonacci(20);
// console.log("the total is: " + result);
