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
myStr = ourName + "This is the end";
console.log(myStr);
