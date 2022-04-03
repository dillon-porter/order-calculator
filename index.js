document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")

function calculate() {
    const food = parseInt(document.getElementById("food-select").value)
    const drink = parseInt(document.getElementById("drink-select").value)
    const transport = parseInt(document.getElementById("transport-select").value)
    const bags = document.getElementById("bags-checkbox").checked

    let cost = food + drink + transport

    if (bags) {
        cost += 5
    }

    costEl.textContent = `$${cost}`



}