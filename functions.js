function doubltIt(num){
    var result = num * 2;
    return result;
}
var first  = doubltIt(200);
var second = doubltIt(50);

var total  = first / second;

console.log(total);


// multi parameter use

function multiParaMeter(num1, num2){
    var result  = num1 + num2;
    return result;
}

var sum = multiParaMeter(20, 50);
console.log(sum);