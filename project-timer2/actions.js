import state from "./state.js";
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function play() {
    state.isRunning = !state.isRunning
    timer.countdown()
}
export function stop() {
    state.isRunning = false
    timer.updateDisplay()
}

export function plusFive() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    minutes = minutes + 5
    minutes = String(minutes)
    timer.updateDisplay(minutes, seconds)
}

export function minusFive() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    minutes = minutes - 5
    minutes = String(minutes)
    timer.updateDisplay(minutes, seconds)
}