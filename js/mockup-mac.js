$(document).ready(function() {
 
  var mockupSlider = $("#mockup-slider");
  var mockupSliderTitles = $("#mockup-slider-titles");

  mockupSlider.owlCarousel({
      singleItem:true,
      autoPlay: false,
      navigation: false,
      pagination: false,
      mouseDrag: false,
      touchDrag: false
  });
 
  mockupSliderTitles.owlCarousel({
      singleItem:true,
      autoPlay: false,
      navigation: false,
      pagination: false,
      mouseDrag: false,
      touchDrag: false
  });
  
  $(".next").click(function(){
    mockupSlider.trigger('owl.next');
    mockupSliderTitles.trigger('owl.next');
  });
  $(".prev").click(function(){
    mockupSlider.trigger('owl.prev');
    mockupSliderTitles.trigger('owl.prev');
  });
 
});