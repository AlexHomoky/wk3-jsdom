const Btn1 = document.getElementById("Btn1")
const Btn2 = document.getElementById("Btn2")
const Btn3 = document.getElementById("Btn3")
const Btn4 = document.getElementById("Btn4")
const Btn5 = document.getElementById("Btn5")
const Btn6 = document.getElementById("Btn6")
const Btn7 = document.getElementById("Btn7")
const Btn8 = document.getElementById("Btn8")
const Btn9 = document.getElementById("Btn9")

const audio1 = document.getElementById("boom")
const audio2 = document.getElementById("clap")
const audio3 = document.getElementById("hihat")
const audio4 = document.getElementById("kick")
const audio5 = document.getElementById("openhat")
const audio6 = document.getElementById("ride")
const audio7 = document.getElementById("snare")
const audio8 = document.getElementById("tink")
const audio9 = document.getElementById("tom")




Btn1.addEventListener("click", () => {
    audio1.play()
    Btn1.style.opacity = "0.5"
        setTimeout(()=> {
            Btn1.style.opacity = "1"
        }, 300)
})

Btn2.addEventListener("click", () => {
    audio2.play()
    Btn2.style.opacity = "0.4"
        setTimeout(()=> {
            Btn2.style.opacity = "1"
        }, 300)
})

Btn3.addEventListener("click", () => {
    audio3.play()
    Btn3.style.opacity = "0.5"
        setTimeout(()=> {
            Btn3.style.opacity = "1"
        }, 300)
})

Btn4.addEventListener("click", () => {
    audio4.play()
    Btn4.style.opacity = "0.4"
        setTimeout(()=> {
            Btn4.style.opacity = "1"
        }, 300)
})

Btn5.addEventListener("click", () => {
    audio5.play()
    Btn5.style.opacity = "0.5"
        setTimeout(()=> {
            Btn5.style.opacity = "1"
        }, 300)
})

Btn6.addEventListener("click", () => {
    audio6.play()
    Btn6.style.opacity = "0.4"
        setTimeout(()=> {
            Btn6.style.opacity = "1"
        }, 300)
})

Btn7.addEventListener("click", () => {
    audio7.play()
    Btn7.style.opacity = "0.5"
        setTimeout(()=> {
            Btn7.style.opacity = "1"
        }, 300)
})

Btn8.addEventListener("click", () => {
    audio8.play()
    Btn8.style.opacity = "0.4"
        setTimeout(()=> {
            Btn8.style.opacity = "1"
        }, 300)
})

Btn9.addEventListener("click", () => {
    audio9.play()
    Btn9.style.opacity = "0.5"
        setTimeout(()=> {
            Btn9.style.opacity = "1"
        }, 300)
})





document.addEventListener("keydown", (event) => {
    if (event.key === "q") {
        audio1.play()
        Btn1.style.opacity = "0.5"
        setTimeout(()=> {
            Btn1.style.opacity = "1"
        }, 300)
    } else if (event.key === "w") {
        audio2.play()
        Btn2.style.opacity = "0.4"
        setTimeout(()=> {
            Btn2.style.opacity = "1"
        }, 300)
    } else if (event.key === "e") {
        audio3.play()
        Btn3.style.opacity = "0.5"
        setTimeout(()=> {
            Btn3.style.opacity = "1"
        }, 300)
    } else if (event.key === "a") {
        audio4.play()
        Btn4.style.opacity = "0.4"
        setTimeout(()=> {
            Btn4.style.opacity = "1"
        }, 300)
    } else if (event.key === "s") {
        audio5.play()
        Btn5.style.opacity = "0.5"
        setTimeout(()=> {
            Btn5.style.opacity = "1"
        }, 300)
    } else if (event.key === "d") {
        audio6.play()
        Btn6.style.opacity = "0.4"
        setTimeout(()=> {
            Btn6.style.opacity = "1"
        }, 300)
    } else if (event.key === "z") {
        audio7.play()
        Btn7.style.opacity = "0.5"
        setTimeout(()=> {
            Btn7.style.opacity = "1"
        }, 300)
    } else if (event.key === "x") {
        audio8.play()
        Btn8.style.opacity = "0.4"
        setTimeout(()=> {
            Btn8.style.opacity = "1"
        }, 300)
    } else if (event.key === "c") {
        audio9.play()
        Btn9.style.opacity = "0.5"
        setTimeout(()=> {
            Btn9.style.opacity = "1"
        }, 300)
    }
    })

