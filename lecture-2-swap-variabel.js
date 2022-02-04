// swap variable with the help of temp means temporary variable.

//* approach 1: temorary variable
var first = 12;
var second = 34;
console.log('before swap', first, second);
// var temp = first;
// first = second;
// second = temp;
// console.log('after swap', first, second);

//* approach 2: Destructuring

[first, second] = [second, first];
console.log('after swap', first, second);