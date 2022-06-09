let number1: number = 0;
let number2: number = 1;
let nextNumber: number;
let sum: number = 0;
let arrFibonacci: number[] = [];

function totalNumberOfFibonacci(maximumCount: number) {
    let size = maximumCount;
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

function sumFibonacciSequence(array: Array<number>) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
arrFibonacci = totalNumberOfFibonacci(20);
console.log(arrFibonacci);
sum = sumFibonacciSequence(arrFibonacci);
console.log(sum);
