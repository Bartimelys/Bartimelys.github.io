$(document).ready(function(){
    // slick slider in block novelty 
    $('.novelty__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [            
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]        
    });
    // slick slider in block review 
    $('.review__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // dotsClass: 'slick-dots',
        responsive: [            
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]        
    });
    // slick slider in block offer 
    $('.offer__slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
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
      });
      // slick slider in block event
      $('.event__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev-event"><img src="icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next-event"><img src="icons/arrow-right.png"></button>',
        responsive: [            
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]        
    });
    $('ul.futured__tabs').on('click', 'li:not(.futured__tab_activ)', function() {
      $(this)
        .addClass('futured__tab_activ').siblings().removeClass('futured__tab_activ')
        .closest('div.container').find('div.futured__content').removeClass('futured__content_activ').eq($(this).index()).addClass('futured__content_activ');
    });
});