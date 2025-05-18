//EX1
console.log("####### EXERCICE 1 #######");

function len(str) {
    return str.length;
}

//EX2
console.log("####### EXERCICE 2 #######");

function isPresentIn(tab, element) {
    if (element in tab)
        return true;
    else
        return false;
}

//EX3
console.log("####### EXERCICE 3 #######");

function lenTab(tab) {
    return tab.length;
    
}

//EX4
console.log("####### EXERCICE 4 #######");

let textEX4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magni."
let textEX4Split = textEX4.split(" ");
let tabEX4 = [];

for (i in textEX4Split) {
    tabEX4.push(textEX4Split[i]);
}
console.log(tabEX4);

//EX5
console.log("####### EXERCICE 5 #######");
tabEX5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valeur = 5;
function filterNombres(tab, valeur) {
    let tabFiltre = [];
    for (i in tab){
        if (tabEX5[i] > valeur)
            tabFiltre.push(tab[i]);
    }
    return tabFiltre;
}

console.log(filterNombres(tabEX5, valeur));

//EX6
console.log("####### EXERCICE 6 #######");
class personne{
    constructor(nom) {
        this.nom = nom;
    }
}

function addProp(objet, cle, valeur) {
    return objet[cle] = valeur
}
addProp(personne, "nom", "John");
addProp(personne, "age", "25");

console.log(personne.nom);
console.log(personne.age);

//EX7
console.log("####### EXERCICE 7 #######");
let tabEX7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let extendTabEX7 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (i in tabEX7) {
    tabEX7.push(extendTabEX7[i]);
}
console.log(tabEX7);

//EX8
console.log("####### EXERCICE 8 #######");
let tabEX8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseTab(tab) {
    return tab.reverse();
}

console.log(reverseTab(tabEX8));

//EX9
console.log("####### EXERCICE 9 #######");
let tabEX9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function extract(tab, born1, born2) {
    let tabExtract = [];
    for (i in tab)   
        if (tab[i] > born1)
            if (tab[i] < born2)
                tabExtract.push(tab[i]);
    return tabExtract;
}

console.log(extract(tabEX9, 2, 5));

//EX10
console.log("####### EXERCICE 10 #######");

let strEX10 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magni."

function remplcerMot(str, ancienMot, nouveauMot){
    return str.replace(ancienMot, nouveauMot);
}

strEX10 = remplcerMot(strEX10, "Lorem", "meroL");
console.log(strEX10);


// EX BONUS PAS DANS LA CONSIGNE MAIS ÇA ME FAIT RIRE D'ESSAYER
let strBonus = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magni."

function fonctionBonus(strBonus){

    let scraped = [];
    let ancienMot = [];
    let nouveauMot;
    let splitStrBonus = strBonus.split(" ");

    for (i in splitStrBonus) {
        ancienMot = splitStrBonus[i];
        scraped = ancienMot.split("");
        nouveauMot = (reverseTab(scraped)).join("");
        strBonus = strBonus.replace(ancienMot, nouveauMot);
    }

    return strBonus;
    
}
console.log(fonctionBonus(strBonus));