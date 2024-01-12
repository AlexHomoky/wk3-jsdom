const charCodeResult = document.getElementById("result1");
const keyResult = document.getElementById("result2");
const codeResult = document.getElementById("result3");

document.addEventListener("keydown", (event) => {
    charCodeResult.textContent = event.keyCode;
    keyResult.textContent = event.key;
    codeResult.textContent = event.code;
})












// document.addEventListener("keydown", (event) => {
//     console.log(event.keyCode) //charCode
//     console.log(event.key)  //key
//     console.log(event.code) //code (use for drums)
// })




