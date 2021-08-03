// const num = 4;
// var remainder = num % 2;
// console.log(remainder == 0);



const num = 145;

function isEven(number) {
    if (number % 2 == 0) {
        return "Even";
    }
    return "Odd";
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('Is my Number Even:', isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('Is her Number Even:', isHerNumberEven);

// Function to determine odd

function isOdd(number) {
    if (number % 2 != 0) {
        return "Odd";
    }
    return "Even";
}


const isMyNumberOdd = isOdd(myNumber);
console.log('Is my Number Odd:', isMyNumberOdd);


const isHerNumberOdd = isOdd(herNumber);
console.log('Is her Number Odd:', isHerNumberOdd);