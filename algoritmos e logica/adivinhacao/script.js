const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

let randomInt = getRandomInt(0, 10)
  
let tries = 0

guestNumber()

function guestNumber() {
let guest = prompt("Adivinhe o numero que estou pensando, estar entre 0 e 10!");

if(guest == randomInt) {
    alert(`Parabens, voce acertou o numero em ${tries} tentativas!`);
} else {
    alert(`Errou! Tente novamente, tentativa(s) total(is): ${tries + 1}`);
    ++tries;
    guestNumber()
}
}
