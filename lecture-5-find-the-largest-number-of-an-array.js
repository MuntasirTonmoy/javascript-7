//* way 1

/* function arrayMax(numbers) {

    return Math.max(...numbers); //here ... is spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

} */

//* way 2
function arrayMax(numbers) {
    var largest = numbers[0]; // we will assume that the first number of the array is largest
    // now we will check all the element 
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) // here we check that if any element of an array is bigger than the first element 
        {
            largest = numbers[i]; // than that element of the array will be stored in the largest element
        }
    }

    return largest; // then we return the largest value to the function
    //! careful about that we have to write return outside the loop
}

console.log('The max value is ', arrayMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// TODO. complete
//// find the lowest element of an array - task

/* function arrayMin(numbers) {
    var smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return smallest;

} */

// way 2

//* way 1

function arrayMin(numbers) {

    return Math.min(...numbers); //here ... is spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

}

console.log('the smallest number is ', arrayMin([1, 2, 3, 4, 5, 6, 7, 8, 9]))

