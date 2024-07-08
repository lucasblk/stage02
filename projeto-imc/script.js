import { Modal } from './modal.js';


const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#heigth")



form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const heigth = inputHeight.value

    let imc = IMC(weight, heigth)

    Modal.open()
    Modal.message.innerText = `Seu IMC: ${imc}`

}




function IMC(weight, heigth) {
    return Number(weight / ((heigth/100) ** 2)).toFixed(2);
}