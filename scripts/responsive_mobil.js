let header_img = document.getElementById("three_pyramids");

function changeHeader(x) {
    console.log("this thing is ooonnnn");
    if (x.matches) { 
        header_img.src ="images/Pyramide_V2_3_responsive.png"
    } else {
        header_img.src ="images/Pyramide_V2_3.png"
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)");
  changeHeader(x);
  x.addListener(changeHeader);