const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let Color = document.querySelector(".color")
let Btn = document.getElementById("btn")
 
 
Btn.addEventListener("click", function(){
    let hexColor = "#"
    for(let i = 0; i<6; i ++){
  hexColor += hex[GetRandomNumber()]
  
    }
    
    document.body.style.backgroundColor = hexColor
    Color.textContent= hexColor
    
    
}) 
 function GetRandomNumber(){
      return  Math.floor(Math.random() * hex.length)
 }      