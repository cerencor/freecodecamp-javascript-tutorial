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