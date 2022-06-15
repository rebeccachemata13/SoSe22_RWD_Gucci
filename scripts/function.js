console.log("heeeellllppppp");
$(document).ready(function(){
    console.log("sliiiccckk");
    $('.middle_image').slick({
     slidesToShow:1,
     slidesToScroll:1,
     arrows: false,
     fade: true,
     asNavFor: '.pyramid_all_div'  
    })
    
    $('.pyramid_all_div').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.middle_image',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      });

     $('.color_selector_div').slick({
        dots: true,
        arrows: true,
      }
      );
});
