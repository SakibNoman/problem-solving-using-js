var numberOne = 5;
var numberTwo = 11;
console.log("before swap: number one = "+numberOne+" number two = "+numberTwo);

numberOne = numberOne+numberTwo;
numberTwo = numberOne-numberTwo;
numberOne = numberOne-numberTwo;

console.log("after swap: number one = "+numberOne+" number two = "+numberTwo)