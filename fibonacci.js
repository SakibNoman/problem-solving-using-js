var fiboArr = [0,1];
function fibo(num){
    for(var i=2;i<=num;i++){
        fiboArr[i]=fiboArr[i-1]+fiboArr[i-2];
    }
    return fiboArr;
}

var result = fibo(150);

console.log(result);