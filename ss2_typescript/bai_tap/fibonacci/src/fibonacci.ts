let num : number = 20;
let nextNum : number;
let num1 : number = 0;
let num2 : number = 1;
for (let i = 0; i <num ; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}
