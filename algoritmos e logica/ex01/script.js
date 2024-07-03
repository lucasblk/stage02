let n1 = Number(prompt('Digite o primeiro numero:'));
let n2 = Number(prompt('Digite o segundo numero:'));
let sum = n1 + n2;
let sub = n1 - n2;
let division = n1 / n2;
let mult = n1 * n2;
let oddEven = n1 % n2;
let isEqual = n1 == n2;

alert (`A soma: ${sum}`)
alert (`A subtracao: ${sub}`)
alert (`A divisao: ${division}`)
alert (`A multiplicacao: ${sum}`)
alert (`O resto da divisao: ${oddEven}`)
if(sum % 2 == 0){alert (`O numero e PAR`)} else {alert (`O numero e IMPAR`)}
if(isEqual != true) {alert (`Os numeros sao diferentes!`)} else {alert (`Os numeros sao Iguais!`)}




