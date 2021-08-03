// let number = 5;
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
// }
// console.log("Answer is:", factorial);

function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

var firstFactorial = factorial(7);
console.log("Factorial of 7 is:", firstFactorial);

var secondFactorial = factorial(9);
console.log("Factorial of 9 is:", secondFactorial);