let tab = [];
document.querySelectorAll("button").forEach(element => {element.addEventListener("click", () => {tab.push(element.textContent);document.querySelector("#text").value = tab.join("");});});
document.querySelector("#egal").addEventListener("click", () => {tab[tab.indexOf("egal")] = null;document.querySelector("#text").value = (eval(tab.join("")));tab = [];});