let middle_image = document.getElementById("middle_image");
let green_pyramide = document.getElementById("green_pyramide");
let red_pyramide = document.getElementById("red_pyramide");
let yellow_pyramide = document.getElementById("yellow_pyramide");
let price = document.getElementById("price");

function changeToRed(){
    middle_image.src = "images/diamonds_pyramide_red.png";
    red_pyramide.classList.add("active_pyramide");
    yellow_pyramide.classList.remove("active_pyramide");
    green_pyramide.classList.remove("active_pyramide");
    price.innerHTML="30 000 $";
}
function changeToGreen(){
    middle_image.src = "images/diamonds_pyramide_green.png";
    green_pyramide.classList.add("active_pyramide");
    yellow_pyramide.classList.remove("active_pyramide"); 
    red_pyramide.classList.remove("active_pyramide");
    price.innerHTML="45 000 $";   
           
}
function changeToYellow(){
    middle_image.src = "images/diamonds_pyramide_gelb.png";
    yellow_pyramide.classList.add("active_pyramide"); 
    red_pyramide.classList.remove("active_pyramide"); 
    green_pyramide.classList.remove("active_pyramide");
    price.innerHTML="25 000 $";  
        
}


// green_pyramide.addEventListener("click",changeToGreen);
// red_pyramide.addEventListener("click",changeToRed);
// yellow_pyramide.addEventListener("click",changeToYellow);