var numOne = 0;
var numTwo = 1;
var numThree;

console.log(numOne);
console.log(numTwo);

for(let i = 2; i < 100; i++){
    numThree = (numOne + numTwo);
    console.log(numThree);
    numOne = numTwo;
    numTwo = numThree;
}