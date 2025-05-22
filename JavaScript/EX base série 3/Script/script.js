let nombre = Math.floor(Math.random() * 10) + 1;
let r;

do{
    r = parseInt(prompt('try: '));
    if (r !== nombre){
        console.log('try encore: ');
    }
}
while (r !== nombre)

console.log('Bravo, c’est correct !')
