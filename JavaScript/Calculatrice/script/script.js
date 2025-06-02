let tab = [];
document.querySelectorAll("button").forEach(element => {element.addEventListener("click", () => {tab.push(element.textContent)})});
document.getElementById("egal").addEventListener("click", () => {tab[tab.indexOf("egal")] = null;console.log(eval(tab.join("")));tab = [];});