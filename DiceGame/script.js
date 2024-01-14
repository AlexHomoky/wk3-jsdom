const currentRoll = document.getElementById("currentRoll")
const score = document.getElementById("score")
const roll = document.getElementById("roll")
const won = document.getElementById("won")


function diceRoll() {
    let result = Math.floor(Math.random()*6)+1
    return result
}


let floatingScore = 0

roll.addEventListener("click", () => {
    let result = diceRoll()
    won.textContent = ""
    currentRoll.textContent = `Roll = ${diceRoll()}`
    if (result == 1) {
        console.log(result)
        floatingScore = 0
        won.textContent = "Oops back to 0..."
    } else if (result == 2 || result == 3 || result == 4 || result == 5 || result == 6 ) {
        console.log(result)
        floatingScore += result
    }
    score.textContent = `Score = ${floatingScore}`
    if (floatingScore >= 20) {
        won.textContent = "You Won!! please refresh to play again"
        roll.disabled = true
    }
    
})



