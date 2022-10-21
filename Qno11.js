// Write a function to generate a random number and find the factorial of the random number generated in javascript.

function getRandomNumber() {
    return Math.floor(Math.random() * 50); //returns random number in between 50
}

/// using for loop iteration
function findfactorial(cb) {
    let factorial = 1;
    const randomNumber = cb();
    console.log(randomNumber);
    for (i = 1; i <= randomNumber; i++) {
        factorial = i * factorial;
    }
    return factorial;
}

console.log(findfactorial(getRandomNumber));

//using recursion (function that calls itself until the condition gets satisfied)
function factorialRecursion(number) {
    if (number < 0)
        return -1;
    else if (number == 0)
        return 1;
    else {
        return (number * factorialRecursion(number - 1));
    }
}

const randomNumber = getRandomNumber();
console.log(factorialRecursion(randomNumber));