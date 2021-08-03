function isLeapyear(year) {
    if (year % 4 == 0) {
        return "Leap Year";
    }
    return "Not Leap Year";
}

const myYear = 2087;
const isMyYear = isLeapyear(myYear);
console.log('');
console.log("Is my Year leap year:", isMyYear);



const yourYear = 2224;
const isYourYear = isLeapyear(yourYear);
console.log("Is your Year leap year:", isYourYear);
console.log('');