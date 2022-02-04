function maxTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

function maxThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

console.log(maxTwo(8, 45));
console.log(maxThree(8, 45, 56));

// * multi line comment shortcut Alt + shift + a

// we can also find the max value by using Math.max function

console.log('largest is', Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9)); // it will return the max value;