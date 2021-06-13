$(function(){
  $('#rec-slick').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinity: true,
    speed: 1000,
    centerMode: true,
    centerPadding: '100px',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',
          }
        }
      ]
  });
});

$(function(){
  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
  });
});

$(function(){
  $('.js-accordion').on('click', function(){
    $(this).next().slideToggle();
  });
});

$(function(){
  new WOW().init();
});