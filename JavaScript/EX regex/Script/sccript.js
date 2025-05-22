let chain = "Lorem ipsum dolor sit amet consectetur CHAT ! adipisicing elit. Accusantium, magni.";

//EX1
let regexEX1 = /CHAT/
console.log("EX1");
console.log(regexEX1.test(chain));

//EX2
let regexEX2 = /^[A-Z]/
console.log("EX2");
console.log(regexEX2.test(chain));

//EX3
let numbersEX3 = "123456";
let falseNumbersEX3 = "21354gf5g7898743";
let regexEX3 = /^\d+$/

console.log("EX3");
console.log(regexEX3.test(numbersEX3));
console.log(regexEX3.test(falseNumbersEX3));

//EX4
let CP = "75001";
let falseCP = "687435";

let regexEX4 = /^\d{5}$/

console.log("EX4");
console.log(regexEX4.test(CP));
console.log(regexEX4.test(falseCP));

//EX5

let emails = "KU9tK@example.com";
let regexEX5 =  /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;

console.log("EX5");

console.log(regexEX5.test(emails));

//EX6
let phoneNumber = "06 45 68 13 58";

let regexEX6 = /^0[1-9](\s\d{2}){4}$/;

console.log("EX6");
console.log(regexEX6.test(phoneNumber));

//EX7 

let pass = "Motdepasse@1234";

let regexEX7 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s><\"']).{8,}$/;
console.log("EX7");
console.log(regexEX7.test(pass));

//EX8

let nomPrenom = "John Doe"

let regexEX8 = /^[A-Z][a-z]\s[A-Z][a-z]/;
console.log("EX8");
console.log(regexEX8.test(nomPrenom));




