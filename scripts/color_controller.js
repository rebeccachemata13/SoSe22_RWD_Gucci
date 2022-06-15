let price_div_2 = document.getElementById("this_is_price_div");
let price = document.createElement("price");



console.log("dieses Script läuft");

// function changeToRed(){
//     middle_image.src = "images/diamonds_pyramide_red.png";
//     red_pyramide.classList.add("active_pyramide");
//     yellow_pyramide.classList.remove("active_pyramide");
//     green_pyramide.classList.remove("active_pyramide");
//     price.innerHTML="30 000 $";
// }
// function changeToGreen(){
//     middle_image.src = "images/diamonds_pyramide_green.png";
//     green_pyramide.classList.add("active_pyramide");
//     yellow_pyramide.classList.remove("active_pyramide"); 
//     red_pyramide.classList.remove("active_pyramide");
//     price.innerHTML="45 000 $";   
           
// }
// function changeToYellow(){
//     middle_image.src = "images/diamonds_pyramide_gelb.png";
//     yellow_pyramide.classList.add("active_pyramide"); 
//     red_pyramide.classList.remove("active_pyramide"); 
//     green_pyramide.classList.remove("active_pyramide");
//     price.innerHTML="25 000 $";  
        
// }



    // console.log("do somethiiiiiiiing");
    // let green_pyramide = document.getElementById("slick-slide22");
    // let red_pyramide = document.getElementById("slick-slide21");
    // let yellow_pyramide = document.getElementById("slick-slide20");
//     let dot1 = document.getElementById("slick-slide-control20");
//     let dot2 = document.getElementById("slick-slide-control21");
//     let dot3 = document.getElementById("slick-slide-control22");
    
    
//     if(green_pyramide.classList.contains("slick-current")){
//         price.innerHTML="45 000 $";     
//     }
//     if(red_pyramide.classList.contains("slick-current")){
//         price.innerHTML="30 000 $";
//     }
//     if(yellow_pyramide.classList.contains("slick-active")){
//        price.innerHTML="25 000 $";
//     }
//     price_div_2.appendChild(price);
//     price.classList.add("second-headline");
   
// }



function declaringDots() {
    priceControllerYellow();
    let dot1 = document.getElementById("slick-slide-control20");
    let dot2 = document.getElementById("slick-slide-control21");
    let dot3 = document.getElementById("slick-slide-control22");

    function priceControllerRed(){
        price.innerHTML="30 000 $";
        price_div_2.appendChild(price);
        price.classList.add("second-headline");
    }
    function priceControllerGreen(){
        price.innerHTML="45 000 $";
        price_div_2.appendChild(price);
        price.classList.add("second-headline");
    }
    function priceControllerYellow(){
        price.innerHTML="25 000 $";
        price_div_2.appendChild(price);
        price.classList.add("second-headline");
    }
    
    dot1.addEventListener("click",priceControllerYellow);
    dot2.addEventListener("click",priceControllerRed);
    dot3.addEventListener("click",priceControllerGreen);
    priceControllerYellow();
}
setTimeout(declaringDots, 500);






//  green_pyramide.addEventListener("click",changeToGreen);
//  red_pyramide.addEventListener("click",changeToRed);
//  yellow_pyramide.addEventListener("click",changeToYellow);