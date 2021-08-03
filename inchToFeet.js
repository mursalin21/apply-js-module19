function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}


var myInches = 132;
var feet = inchToFeet(myInches);
console.log("My Inches in Feet", feet);


//Another example
var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log("Dadi Inches in Feet", feet);


//Another example
var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log("Nani Inches in Feet", feet);


//Another example
var nanaInches = 171;
var feet = inchToFeet(nanaInches);
console.log("Nana Inches in Feet", parseFloat(feet.toFixed(2)));


//Mile to Kilometer

function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km', marathon);