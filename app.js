const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let Color = document.querySelector(".color")
let Btn = document.getElementById("btn")

 Btn.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    Color.textContent = colors[randomNumber]


})