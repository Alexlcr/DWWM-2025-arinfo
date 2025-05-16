//EX1

let prenom = "John";
let age = 20;
let agePlusUn = age + 1;
console.log("EXERCICE 1: je m'appelle " + prenom + " et j'ai " + agePlusUn + " ans l'annee prochaine");

//EX2

let longueur = 10;
let largeur = 5;
let surface = longueur * largeur;
console.log("EXERCICE 2: Le rectangle de longueur "+ longueur +" cm et de largeur "+ largeur +" cm a pour surface "+ surface +" cm2");

//EX3
let temperatureCelsius = 0;
let temperatureKelvin = temperatureCelsius + 273.15;
console.log("EXERCICE 3: La temperature "+  temperatureCelsius +" vaut "+  temperatureKelvin +" en Kelvin.");

//EX4
let nombre = (Math.random() * 100).toFixed(0);
console.log("EXERCICE 4: Le nombre aleatoire est "+ nombre);

//EX5
console.log("EXERCICE 5: La valeur de PI est " + Math.PI)
let rayon = 10;
let deuxPi = 2 * Math.PI;
let carrePi = Math.pow(Math.PI, 2);
let surfaceCercle = deuxPi * carrePi;
console.log("EXERCICE 5: le cercle de rayon "+ rayon +" cm pour surface "+ surfaceCercle  +" cm2");
