var btn = document.querySelector("#btn");
var color = document.querySelector("#color");

var colors = ["green","yellow","red","black","pink","blue","grey","brown","orange"];


btn.addEventListener("click",function (){
    var randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})