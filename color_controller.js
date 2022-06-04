let middle_image = document.getElementById("middle_image");

function changeToRed(){
    middle_image.getAttribute("src") = "images/diamonds_pyramide_red.png"        

}

function changeToGreen(){
    console.log("hello");
    middle_image.getAttribute("src") = "images/diamonds_pyramide_green.png"        

}

let green_pyramide = document.getElementById("green_pyramide");
green_pyramide.addEventListener("click",changeToGreen);

let red_pyramide = document.getElementById("green_pyramide");
red_pyramide.addEventListener("click",changeToRed);