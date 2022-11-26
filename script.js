var N = 0;

N = prompt('Digite um número positivo:');

const avalieSeOnumeroEprimo = (n) => {

    var primos = true;
    for (let contador = 2; contador < n; contador++) {
        if (n % contador == 0) {
            primos = false;
            return `${n} não um número primo!`;
        }
    }
    if (primos == true) {
        return `${N} é um número primo`;
    }
}

function listarPrimos(numero) {
    let numbers = new Array();
    for (var i = 0; i <= numero; i++) {
        if (verifiqueSeEprimo(i)) {
            numbers.push(i);
        }
    }
    return `E esses são todos os números primos até ${N} : ${numbers.join(',')}`;
}
function verifiqueSeEprimo(numero) {
    for (let i = 2; i < numero; i++)
        if (numero % i === 0) {
            return false
        }
    return numero > 1;
}
console.log(avalieSeOnumeroEprimo(N));
console.log(listarPrimos(N));
