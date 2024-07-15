import * as FocusTimer from "./index.js"

FocusTimer.start(25, 0)

const tree = document.querySelector("#tree")
const rain = document.querySelector("#rain")
const store = document.querySelector("#store")
const fire = document.querySelector("#fire")


tree.addEventListener('click', event => {
    tree.classList.toggle("tree")
    rain.classList.remove("rain")
    store.classList.remove("store")
    fire.classList.remove("fire")

})

rain.addEventListener('click', event => {
    tree.classList.remove("tree")
    rain.classList.toggle("rain")
    store.classList.remove("store")
    fire.classList.remove("fire")
})

store.addEventListener('click', event => {
    tree.classList.remove("tree")
    rain.classList.remove("rain")
    store.classList.toggle("store")
    fire.classList.remove("fire")
})

fire.addEventListener('click', event => {
    tree.classList.remove("tree")
    rain.classList.remove("rain")
    store.classList.remove("store")
    fire.classList.toggle("fire")
})
