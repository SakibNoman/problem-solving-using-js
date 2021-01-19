
//Testing with numbers
var numbers = [2,3,4,4,3,2,1,4,4,5,6,6];

var uniqueNumbers = [];

for(var i =0;i<numbers.length;i++){
    
    currentIndex = uniqueNumbers.indexOf(numbers[i]);
    if(currentIndex==-1){
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);


// Testing with string
var numbers = ["sakib","sakib","rakib","rakib"];

var uniqueNumbers = [];

for(var i =0;i<numbers.length;i++){
    
    currentIndex = uniqueNumbers.indexOf(numbers[i]);
    if(currentIndex==-1){
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);
