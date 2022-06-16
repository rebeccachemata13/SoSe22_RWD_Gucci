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

  $(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 700);
return false;
});

