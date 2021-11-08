const btn = document.querySelector("#btn");
const color = document.querySelector("#color");

const hexa = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


btn.addEventListener("click",function(){
    let symbole = "#";
    for (i=0; i<6 ;i++){
        let randomNumber = Math.floor(Math.random() * hexa.length);
        symbole += hexa[randomNumber];
    }
   color.innerHTML = symbole;
    document.body.style.backgroundColor = symbole;
})