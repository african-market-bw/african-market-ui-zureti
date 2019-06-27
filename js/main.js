//mouseover
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("mouseover", function (event){
    event.target.style.background = "white";
    event.target.style.color = "#e84c3d";
})

let footerLink = document.querySelector(".footer-link");
footerLink.addEventListener("mouseover", function (event){
    event.target.style.color = "yellow";
})

//click

let btn = document.querySelector("#btn");
btn.addEventListener("click", function (event){
    event.target.style.color = "#e84c3d";
})
