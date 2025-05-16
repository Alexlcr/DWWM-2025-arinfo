//EX1
let nom = prompt("Quel est votre nom?");
let age = prompt("Quel est votre age?");
age ++
console.log("EXERCICE 1: je m'appelle " + nom + " et j'ai " + age + " ans l'annee prochaine");

//EX2
let longueur = prompt("Quelle est la longueur du rectangle?");
let largeur = prompt("Quelle est la largeur du rectangle?");
let surface = longueur * largeur;
console.log("EXERCICE 2: Le rectangle de longueur "+ longueur +" cm et de largeur "+ largeur +" cm a pour surface "+ surface +" cm2");

//EX3
let temperatureCelsius = parseFloat(prompt("Quelle est la temperature en celsius?"));
let temperatureKelvin = temperatureCelsius + 273.15;
console.log("EXERCICE 3: La temperature "+  temperatureCelsius +" vaut "+  temperatureKelvin +" en Kelvin.");

//EX4
let x = parseFloat(prompt("Quelle est la valeur de x?"));
let y = parseFloat(prompt("Quelle est la valeur de y?"));
let paragraphe = document.getElementById("p1");
if (x > y) {
        paragraphe.innerHTML = "x est plus grand que y";
    } 
    else if (x < y) {
        paragraphe.innerHTML = "x est plus petit que y";
    }
    else {
        paragraphe.innerHTML = "x et y sont egaux";
    }
