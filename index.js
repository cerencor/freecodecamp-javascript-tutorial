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