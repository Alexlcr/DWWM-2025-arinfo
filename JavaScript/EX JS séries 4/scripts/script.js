//EX 1
let tabEX1 = [1, 2, 3, 4, 5];
for (i in tabEX1) {
    console.log(tabEX1[i]);
}

//EX 2
let tabEX2 = [1, 2, 3, 4, 5];
let somme = 0;
for (i in tabEX2) {
    somme = somme + tabEX2[i];
    }
console.log(somme);

//EX 3
let strEX3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, magni."
function longestWord(str){
    words = str.split(" ");
    longestWord = "";
    for (i in words){
        if (words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}

//EX4
function reverseChain(chain){
    words = chain.split("");
    words.reverse();
    return words.join("");
}

console.log(reverseChain(strEX3))

//EX5
let voyelles = ["a", "e", "i", "o", "u", "y"];
function voyellesIn(str){
    strSplit = str.split("")
    voyellesInStr = [];
    for (i in strSplit){
        if (voyelles.includes(strSplit[i])){
            voyellesInStr.push(strSplit[i]);
        }
    }
    return voyellesInStr;
}

console.log(voyellesIn(strEX3));

//EX6
let tabEX6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function pairs(tab){
    tabPair = [];
    for (i in tab){
        if (tab[i] % 2 === 0){
            tabPair.push(tab[i]);
        }
    }
    return tabPair;
}
console.log(pairs(tabEX6));

//EX7
let produitsEX7 = [
    {nom: "Produit 1", prix : 10},
    {nom: "Produit 2", prix : 20},
    {nom: "Produit 3", prix : 30},
];

function compterProduits(produits){
    nbProduits = 0;
    for (i in produits){
        nbProduits++;
    }
    return nbProduits;
}

console.log(compterProduits(produitsEX7));

//EX8
let produitEX8 = [
    {nom: "Produit 1", prix : 10},
    {nom: "Produit 2", prix : 20},
    {nom: "Produit 3", prix : 30},];

function extraireNomProduits(produits){
    tabNomProduits = [];
    for (i in produits){
        tabNomProduits.push(produits[i].nom);
    }
    return tabNomProduits;
}
console.log(extraireNomProduits(produitEX8));

//EX9

function fact(n){
    let result = 1;
    while (n !== 1){
    result = result * n;
    n = n - 1}
    return result;
}

n = parseInt(prompt('Nombre'))
console.log(fact(n));

//EX10
let tabEX10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function estCroissant(tab){
    for (let i = 1; i < tab.length - 1; i++){
        if (tab[i] < tab[i - 1]){
            return false;
        }else{
            continue;
        }
    }
    return true;
}
console.log(estCroissant(tabEX10));