//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

$(document).ready(function () {
  $('.couch_sertificates').owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    margin: 10,
    navContainer: '.sertificates_nav',
    responsive: {
      0: {
        items: 1,
        margin: 0,
        stagePadding: 60
      },
      577: {
        items: 3
      },
      993: {
        items: 3
      }
    }
  })

  $('#comments').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    dots: true,
    items: 1,
    navText: ['<div class="prev_nav"></div>', '<div class="next_nav"></div>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
      1920: {
        items: 1
      }
    }
  })


});

$('.kouch_persons .btn_more').click(function(e) {
  e.preventDefault();
  $('.modal-container.couch').addClass('active');
});

$('.modal-container.couch .modal-close').click(function() {
  $('.modal-container.couch').removeClass('active');
})


$('.prices .btn_default').click(function(e) {
  e.preventDefault();
  var $parentBlock = $(this).parents('.item');

  if ( $parentBlock.hasClass('maximum') ) {
    $('.modal-container.tarif.maximum').addClass('active');
  } else if ( $parentBlock.hasClass('standart') ) {
    $('.modal-container.tarif.standart').addClass('active');
  }
});

$('.modal-container.tarif .modal-close').click(function() {
  $('.modal-container.tarif').removeClass('active');
})