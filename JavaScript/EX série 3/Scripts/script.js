//EX3
let sexe = prompt("Quel est votre sexe?");
if (sexe === "homme") {
    sexe = "Mr";
} else if (sexe === "femme") {
    sexe = "Mme";
}

//EX1
let nom = "Martin";
let annééDeNaissance = 2000;
console.log("Bonjour " + sexe + " " + nom + " vous avez " + (2025 - annééDeNaissance) + " ans");

//EX2
let note_math = 15;
let note_francais = 12;
let note_HG = 9;
console.log("La moyenne est de " + ((note_math + note_francais + note_HG) / 3) + "/20");

//EX4
let heure = Math.random(0, 23);
if (heure < 12) {
    console.log("nous somme le matin");
}else {
    console.log("nous somme le soir");
}

// //EX5
let choix = 2;
switch (choix) {
    case 1:
        console.log("Insérer")
        break;
    case 2:
        console.log("Supprimer")
        break;
    case 3:
        console.log("Afficher")
        break;
    default:
        console.log("Ce choix n'existe pas")
}

//EX6
let nombre = parseFloat(prompt("Quelle est la valeur de x?"));
let modulo = (nombre%3==0 && nombre%5==0) ? console.log("x est divisible par 3 et 5") : console.log("x n'est pas divisible par 3 et 5");

//EX7
let codePostale = 44000;
while (codePostale < 45000) {
    console.log(codePostale);
    codePostale = codePostale + 10;
}

//EX8
let compte = 0;
while (compte < 20){
    console.log(compte);
    compte = compte + 2;
}

//EX9
let nombrePairOuImpair =parseFloat(prompt("Quelle est la valeur de y?"));
if (nombrePairOuImpair % 2 == 0) {
    console.log("y est pair");
}else {
    console.log("y est impair");
}

//EX10
let tirage = 100;
const liste = [];
let valeur = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function uniqueInteger(liste, max){
    let value;
    do{
        value = getRandomInt(max);
    }
    while (liste.includes(value))
    return value
}

while (liste.length < tirage) {
    let valeur = uniqueInteger(liste, 100);
    liste.push(valeur);
}
console.log(liste);

let nombreChoisi = parseFloat(prompt("Quelle est la valeur de y?"));
let index = nombreChoisi;
let compteurDeTirage = 0;

while (liste[index] != nombreChoisi) {
    index = liste[index];
    compteurDeTirage++
}
console.log("Nombre de tirages: " + compteurDeTirage + ", votre nombre est à l'index " + index);

//EX11
var date = new Date();
console.log("EXERCICE 11: Aujourd'hui nous sommes le " + date)
