// 0, 1, 1, 2, 3, 5, 8, 13, 21... fibonacci series
var a = 0;
var b = 1;


for (var i = 1; i < 15; i++) {
    var fib = a + b;
    a = b;
    b = fib;
    console.log(fib);
}

// show an array of fibonacci series
function fibonacci(number) {

    var fibo = [0, 1]; // here fibo[0]= 0 and fibo[1]=1;
    if (typeof number != 'number')
    // for number input only
    //here we handling unexpected input 
    {
        return 'please give a number';
    }
    //for posetive input
    else if (number < 2) {
        return 'Please! enter a positive number greater than one ';
    }
    else {
        for (i = 2; i < number; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2]; // in fibo series 3rd item = 2nd item + 1st item
        }
        return fibo;
    }
}

console.log(fibonacci(7));