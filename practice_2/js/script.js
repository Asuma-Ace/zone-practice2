$(function() {
  $('.plan-list').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,

        responsive: [{
          breakpoint: 768,
               settings: {
                 slidesToShow: 1,
          }
     }]
   });

  $('.contact-item-q').on('click', function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });

  $('.hamburger-menu').on('click', function() {
    $(this).toggleClass('hamburger-menu-active')
  })

  $('.hamburger-menu').on('click', function() {
    $('.hamburger-cont').toggleClass('active');
    $('.hamburger-cont').next().slideToggle();
  })

  new WOW().init();
});
