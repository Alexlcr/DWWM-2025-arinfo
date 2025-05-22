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