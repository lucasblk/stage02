import state from "./state.js";
import * as timer from "./timer.js"

export function play() {
    timer.countdown()
}
export function stop() {
    state.isRunning = false
    timer.updateDisplay()
}