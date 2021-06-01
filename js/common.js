$(document).ready(function () {
  $('.projects-slider-wrapper').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: $('.projects-arrow__l'),
	  nextArrow: $('.projects-arrow__r')
  });
  new WOW().init();
  function slickify(){
    $('.documents-row').slick({
  	  infinite: true,
  	  slidesToShow: 1,
  	  slidesToScroll: 1,
  	  dots: true,
  	  centerMode: true,
  	  variableWidth: true,
  	  prevArrow: $('.projects-arrow__l'),
  	  nextArrow: $('.projects-arrow__r')
    });
  }
  let $windowWidth = window.innerWidth;
  if ($windowWidth < 992) {
      slickify();   
  }
  $('.clients-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: $('.projects-arrow__l'),
	  nextArrow: $('.projects-arrow__r'),
	  responsive: [
	      {
	        breakpoint: 992,
	        settings: {
	          centerMode: true,
	          variableWidth: true,
	          dots: true,
	        }
	      }
	      // You can unslick at a given breakpoint now by adding:
	      // settings: "unslick"
	      // instead of a settings object
	    ]
  });
});