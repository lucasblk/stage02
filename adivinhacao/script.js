const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1

let btnTry = document.querySelector("#btn-try")
let btnReturn = document.querySelector("#btn-return")

btnTry.addEventListener('click', handleClick)
btnReturn.addEventListener('click', returnHome)
document.addEventListener('keydown', enterPressed)

function handleClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    if(inputNumber.value < 0 || inputNumber.value > 10 || inputNumber.value == "")  {
        alert('Numero invalido, tente novamente!')
    }
    if(Number(inputNumber.value) === randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        let h2text = document.querySelector(".screen2 h2")
        h2text.innerText = `Acertou em ${xAttempts} tentativas`
       
    }
    inputNumber.value = ""
    xAttempts++
}

function returnHome() {
    screen2.classList.add("hide")
    screen1.classList.remove("hide")
    xAttempts = 1
    randomNumber = Math.round(Math.random()*10)
}

function enterPressed(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide') ) {
    returnHome()
}
}