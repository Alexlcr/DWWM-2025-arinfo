// //EX1

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let a = getRandomInt(10);
let b = getRandomInt(10);
let c = getRandomInt(10);

if (a == b && b == c && c == a){
    console.log("Toutes les variables sont identiques.");
}else if (a == b || b == c || c == a){
    console.log("Deux variables sont identiques.");
}else {
    console.log("Les trois variables sont différentes.");
}

//EX2
let x = parseFloat(prompt("Quelle est la valeur de x ?"));
let unitéX = prompt("Quelle est l'unité de x ?");
let resultat = 0;
let condition = (unitéX == "K") ? resultat = x * 1000 : (unitéX == "M") ? resultat = x * 1000000 : (unitéX == "G") ? resultat = x * 1000000000 : (unitéX == "T") ? resultat = x * 1000000000000 : "Unité inconnue";

console.log("La valeur de x est de " + resultat);

//EX3
let nombreOctets = prompt("Quelle est la taille du fichier en octets (unité K, M, G, T) ?");
nombreOctets = nombreOctets.toUpperCase();
console.log(typeof nombreOctets);
console.log( nombreOctets);

switch (true){
    case nombreOctets.includes("K"):
        console.log("La taille du fichier est de " + (parseFloat(nombreOctets) * 1024) + " octets");
        break;
    case nombreOctets.includes("M"):
        console.log("La taille du fichier est de " + (parseFloat(nombreOctets) * (1024**2)) + " octets");
        break;
    case nombreOctets.includes("G"):
        console.log("La taille du fichier est de " + (parseFloat(nombreOctets) * (1024**3)) + " octets");
        break;
    case nombreOctets.includes("T"):
        console.log("La taille du fichier est de " + (parseFloat(nombreOctets) * (1024**4)) + " octets");
        break;
    default:
        console.log("Unité inconnue");
}

//EX4
let stringOrInt = getRandomInt(2);
let sign = getRandomInt(2);
let value = getRandomInt(10);

function posOrNeg(value, sign){
    switch (true){
        case value > 0:
            reply = "La variable est un entier positif";
            return reply;
        case value != 0 && sign == 1:
            reply = "La variable est un entier negatif";
        default:
            console.log(value);
            reply = "La variable est un entier nul";
    }
}

if (sign == 1){
    value = value - 2 * value;
}

console.log(value);

if (stringOrInt == 1){
    value = String(value);
}else {
    value = Number(value);
}



if (typeof value == "string"){
    console.log("La variable est une string");
    value = Number(value);
    posOrNeg(value);
    console.log(reply);
    
}else {
    posOrNeg(value);
    console.log(reply);
}