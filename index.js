let title = "This is the Title of a Book";
let upperTitle = title.toUpperCase();
console.log(upperTitle);  // this is the title of a book

typeof 1;
let string = "Hello"

console.log(typeof string)


let myInt = 123;
let myDecimal = 123.5;

console.log(myInt === myDecimal)

let myNum = 145;
myNum += 1;

let multiplier = 2;

let product = myNum * multiplier;

console.log(product)

let mySum = 123.45.toPrecision(4);

console.log(mySum)

let first = "42";
let second = "24.7";
let third = "0.3333"

let result = first + second;
console.log(result)
/*
The console.log above will log "4224.7" to the console, because 
it is concatinating strings instead of adding the values together
*/

let result2 = parseInt(first) + parseInt(second);
console.log(result2)
/* 
The console.log above will log 66 to the console, because both 
string values are converted to number types. However the second 
value has a decimal point, which means its value is rounded down to make a whole number because parseInt() was used, not parseFloat()
*/

let result3 = parseInt(first) + parseFloat(third);
console.log(result3)

let sum1 = 0.2;
let sum2 = 0.1;

let resultOfSum = sum1 + sum2;

console.log(resultOfSum)

console.log((0.1 * 10 + 0.2 * 10) / 10);

console.log(1.03 + 1.04);  // 2.0700000000000003
console.log((1.03 * 100 + 1.04 * 100) / 100);  // 2.07

let x = null;
if (x === undefined) {
  // this will execute
}

console.log(x)

let y = null;
let xY = x + y;

console.log(xY)

console.log(1 + Number("1"));

console.log(1 == "1")
console.log(1 === "1") // === better to use 3 to ensure datatypes are not mixed

let num100 = 100;
let str100 = "100";

console.log(num100 == str100);
console.log(num100 === str100);

console.log(num100 + str100);
console.log(num100 + Number(str100));