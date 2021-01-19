var fiboArr = [0, 1];
var currentPosition = 2;
function fibo(num) {
    fiboArr[currentPosition] = fiboArr[currentPosition - 1] + fiboArr[currentPosition - 2];
    currentPosition++;
    if (currentPosition == num+1) {
        return fiboArr;
    }
    return fibo(num);
}

var result = fibo(15);

console.log(result);