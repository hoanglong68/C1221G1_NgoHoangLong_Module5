var num = 20;
var nextNum;
var num1 = 0;
var num2 = 1;
for (var i = 0; i < num; i++) {
    console.log(num1 + '<br>');
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}
