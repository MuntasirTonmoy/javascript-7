var num = [1, 3, 4, 5, 3, 6, 7, 8, 9];
var sum = 0;
for (var i = 0; i < num.length; i++) {
    sum = sum + num[i];
}
console.log(sum);

function arrayTotal(number) {
    var total = 0;
    for (var i = 0; i < number.length; i++) {
        total = total + number[i];
    }
    return total;
}

console.log(arrayTotal([10, 10, 10, 10, 10])); //* we use array function like that means fucntion er breacket er vitore [] diye er vitore likhte hobe.