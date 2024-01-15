const currentRoll = document.getElementById("currentRoll")
const score = document.getElementById("score")
const roll = document.getElementById("roll")
const won = document.getElementById("won")
const restart = document.getElementById("restart")


function diceRoll() {
    let result = Math.floor(Math.random()*6)+1
    return result
}


let floatingScore = 0

roll.addEventListener("click", () => {
    roll.disabled = false
    let result = diceRoll()
    won.textContent = ""
    currentRoll.textContent = `Current Roll = ${result}`
    if (result === 1) {
        console.log(result)
        floatingScore = 0
        won.textContent = "Rolling a 1 resets the score"
    } else if (result >= 2 && result <= 6 ) {
        console.log(result)
        floatingScore += result
    }
    score.textContent = `Total Score = ${floatingScore}`
    if (floatingScore >= 20) {
        won.textContent = "You Won!!\nPress 'Restart' to play again"
        roll.disabled = true
    }
})

restart.addEventListener("click", () => {
    window.location.reload()

})


