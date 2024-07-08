import { Modal } from './modal.js';
import { AlertError } from './alert.js';
import { IMC , notANumber } from './utils.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#heigth")



form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const heigth = inputHeight.value

    if(notANumber(weight) || notANumber(heigth)) {
        AlertError.open()
        return
    }
    AlertError.close()

    let imc = IMC(weight, heigth)

    Modal.open()
    Modal.message.innerText = `Seu IMC: ${imc}`

}


