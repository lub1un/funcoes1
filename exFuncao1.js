const prompt = require("prompt-sync")();

function ehNum(num) {
    return !isNaN(Number(num))
}

function maiorNumero(num) {

    if(ehNum(num)) {

    let array = num.split("")

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {

            if(array[i] < array[j]) {
                let aux = array[j]
                array[j] = array[i]
                array[i] = aux
            }
        }
    }
    return array.join("");
}
console.log("Número inválido");
return false
}

const numero = prompt("Digite um número: ");

let maior = maiorNumero(numero)
console.log(maior)