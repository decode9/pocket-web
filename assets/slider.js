
function sliderAuto(slider, miliseconds) {
 slider.isLastSlide = function() {
   return slider.page >= slider.dots.childElementCount - 1;
 }

 var slide = function() {
   slider.slideTimeout = setTimeout(function() {
     function slideTo() {
       return slider.isLastSlide() ? 0 : slider.page + 1;
     }

     slider.scrollItem(slideTo(), true);
   }, miliseconds);
 }

 slider.ele.addEventListener('glider-animated', function(event) {
   window.clearInterval(slider.slideTimeout);
   slide();
 });

 slide();
}


window.addEventListener('load',function () {
  const slider=new Glider(document.querySelector('.banner-slider'),{
    slidesToShow: 1,
    dots: '.slider-indicator',
    draggable: true,
    rewind:true,
    arrows: {
      prev: '.slider-prev',
      next: '.slider-next'
    },
  })
  sliderAuto(slider,5000)
})

window.addEventListener('load',function (){
  new Glider(document.querySelector('.collection-list-slider-d'), {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    rewind:true,
    arrows: {
      prev: '.slider-prev-collection',
      next: '.slider-next-collection'
    }
  })
  new Glider(document.querySelector('.column-list'), {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
  })
  new Glider(document.querySelector('.brands-list'), {
    slidesToShow: 5,
    slidesToScroll: 1,
  })
})