$(document).ready(function(){
    $(window).scroll(function(){
        console.log("This shit bla bla bla");
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
          $(".navbar").css("background" , "#1B1B1B");
        }
  
        else{
            $(".navbar").css("background" , "transparent");  	
        }
    })
  })

