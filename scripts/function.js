console.log("heeeellllppppp");
$(document).ready(function(){
    console.log("sliiiccckk");
    $('.middle_image').slick({
     slidesToShow:1,
     slidesToScroll:1,
     arrows: false,
     fade: true,
     asNavFor: '.pyramid_all_div',
     responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]  
    })
    
    $('.pyramid_all_div').slick({
        arrows:false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.middle_image',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 900,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]  
      });

     $('.color_selector_div').slick({
        dots: true,
        arrows: false,
      }
      );
});
