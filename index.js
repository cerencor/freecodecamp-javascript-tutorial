//in-line comment
/*multiline comment*/

//data types: undefined, null, boolean, string, symbol, number and object
var myName = "Ceren"; //will be able to use thgoughout the whole program
myName = 8;
let ourName = "freeCodeCamp"; //will only be used within the scope of where we declare that
const pi = 3.14; //can never change

var a = 5;
var b = 10;
var c = "I am a ";
a = a + 1;
b = b + 1;
c = c + "string!";

var sum = 10 + 10;
console.log(sum);
var difference = 45 - 33;
var product = 8 * 10;
var divide = 66 / 33;

sum++;
sum--;

var quatient = 4.0 / 2.0; //answer: 2.2
var remainder = 11 % 3; //answer: 2

sum+=5;
sum-=5;
sum*=5;
sum/=5;

var myStr = "I am a \"double quoted\" string inside a \"double quoted\" string"; //can use double quotes with backslashes
console.log(myStr);

myStr = 'I am a "double quoted" string inside a "double quoted" string'; //can use double quotes without backslashes
console.log(myStr);

myStr = `'I am a "double quoted" string inside a "double quoted" string'`; //can use both double quotes and singe quotes without back slashes
console.log(myStr);

/*****
CODE OUTPUT
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carrige return
\t  tab
\b  backspace
\f  form feed
******/

//concetanate with plus operator
ourName = "I come first. " + "I come second.";
myStr = ourName + "This is the end ";
console.log(myStr);

ourName = "freeCodeCamp";
var ourStr = "Our name is " + ourName;
console.log(ourStr);

myStr = "freecodeCamp is ";
ourStr = "awesome!";
myStr += ourStr;
console.log(myStr);

//find length of string
var firstName = "Ada";
var firstNameLength = 0;
firstNameLength = firstName.length;

//bracket notation to find the first character of a string
var firstLetterofFirstName = firstName[0];
var secondLetterofFirstName = firstName[1];

//string immutability
//strings cannot be altered once created
//they can still be changed
//myStr[0] = "H" gives error
myStr = "Hello world";

//last letter of a string
var lastLetterofFirstName = firstName[firstNameLength - 1];

//word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + myNoun + myVerb + myAdverb;
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));

//arrays
var ourArray = ["John",23];

ourArray = [["the universe",42],["everything",101010]]

var myArray = [1,2,3];
myArray[1] = 66;
console.log(ourArray[0][0]); //gives "the universe"

//manipulate arrays with psuh()
ourArray.push(["happy",24]);
console.log(ourArray);

//remove with pop() (and add to the variable)
var removedFromArray = myArray.pop();
console.log(removedFromArray);
console.log(myArray);

//shift() removes first element instead of final element

//unshift() similar to push but adds to the beginning of the array

//functions
function ourReusableCode(){
    console.log("inside the first function");
}
ourReusableCode();

function ourFuncWithArgs(a,b){
    console.log(a-b);
}
ourFuncWithArgs(10,5);

//global variables
var myGlobal = 10;
function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    console.log(output);
}
fun2();

//Stand in Line
//in computer science a queue is an abstract data structure where items are kept in order.
//new items can be added to the back of the queue and old items are taken off from the fron of the queue
function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify is just a way to change an array into a string that can easily be printed out to the string
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));

//strict equality sign
/* 
3 == '3' attempts to convert both into same type and checks
3 === 3 does not do the type conversion
3 === 3 is true
3 === '3' is false
3 == 3 is true
3 == '3' is also true
*/

//strict inequality
// if(val !== 17) will not convert types

//if - else if - else
function orderMyLogic(val){
    if(val < 10){
        return "Less than 10";
    }else if (val < 5){
        return "Less than 5";
    }else{
        return "Greater than or equal to 10";
    }
}

//switch statements
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;    
    }
    return answer;
}
console.log(caseInSwitch(2));

function switchOffStuff(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;   
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOffStuff(2));

function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}
console.log(sequentialSizes(8));

//Build javascript objects
var ourDog = { //object is ourDog
    //properties: values
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Kurt",
    "legs": 3,
    "tails": 1,
    "friends": ["me!"]
};

console.log(myDog);

//dot notation
var myDog = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = myDog.hat;
var shirtValue = myDog.shirt;
console.log(hatValue);

//bracket notation
//you can use bracket notation anytime
//but it is required if the property name has a space in it
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
console.log(entreeValue);

//variables
var testObj = {
    12: "namath",
    16: "montana"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);

//updating object properties
//we can use dot notation
ourDog.name = "Happy Camper";
console.log(ourDog);

//add properties to object
ourDog['bark'] = "woof"; 

//delete property
delete ourDog.bark;

//using objects for lookups
function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));

//testing objects for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return "Not found";
    }
}
console.log(checkObj("gift"));

//manipulating complex objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": ["CD","8T","LP"],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": ["Youtube video"]
    }
];

//nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

//accessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: ["rose","tulip","dandelion"]
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//note: collection[id][prop] = collection[id][prop] || [];
//if collection[id][prop] already exits we're going to set to equal to itself
//but if it doesnt exist we are going to set it to empty array

//for and while are exactly like C

//return contacts[i][prop] || "no such property"
//return contacts[i][prop] if it exists, otherwise return no such property

//random decimal number generation
function randomFunction(){
    return Math.random(); //will return a number between 0 and 1 but it will not be 1 (but it can be 0)
}
console.log(randomFunction());

//generate random whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
//floor rounds down to the nearest whole number

//get a random number between min and max ranges
function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

//use the parseInt function
function convertToInteger(str){
    return parseInt(str);
}
console.log(convertToInteger("52"));

function convertToIntegerBinary(str){
    return parseInt(str, 2); //passing 2 to specify base 2 so the computer nows this is a binary number
}
console.log(convertToIntegerBinary("10011"));

//ternary operator
//condition ? statement-if-true : statement-if-false;
function checkSign(num){
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

//"use strict"; is used to catch common mistake errors
//a lot of peaople use it at the top of the code to warn them

//const has all the features of let but it is read only
//var is global

//you cannot reassign a variable declared with const
//but you can mutate an array declared with const
const s = [5, 7, 2];
function editInPlace(){
    "use strict";
    //s = [2, 5, 7]; //this will get an error
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    s[3] = 9;
}
editInPlace();
console.log(s);

//prevent object mutation
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14 //right now this can be changed
    };
    
    Object.freeze(MATH_CONSTANTS); //now pi cannot be changed

    try{
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

//use arrow functions to write concise anonymous functions
var magic = function() {
    return new Date();
};

var magic = () => {
    return new Date();
};

const magic = () => new Date(); //this is the same as the first function

var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
var myConcat = (arr1, arr2) => arr1.concat(arr2);
const myConcat = (arr1, arr2) => arr1.concat(arr2);//adding const to make it nicer
console.log(myConcat([1, 2], [3, 4, 5]))
//these myConcat functions are all the same

//map and filter
const realNumberArray = [4, 5.6, -9.8, 6, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && (num > 0)).map(x => x*x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);