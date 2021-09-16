
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
  if (document.querySelector('.banner-slider') !== null) {
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
  }
})

window.addEventListener('load',function (){
  if (document.querySelector('.collection-list-slider-d') !== null){
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
  }

  if (document.querySelector('.column-list') !== null){
    new Glider(document.querySelector('.column-list'), {
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: true,
    }) 
  }

  if (document.querySelector('.brands-list') !== null){
    new Glider(document.querySelector('.brands-list'), {
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: true,
    })
  }

  if (document.querySelector('.brands-list-desktop') !== null){
    new Glider(document.querySelector('.brands-list-desktop'), {
      slidesToShow: 12,
      slidesToScroll: 1,
      draggable: true,
      arrows: {
        prev: '.slider-prev-brands',
        next: '.slider-next-brands'
      }
    })
  }

  if (document.querySelector('.team-list-slider') !== null){
    new Glider(document.querySelector('.team-list-slider'), {
      slidesToShow: 2,
      draggable: true,
    })
  }
  if (document.querySelector('.recommendation-list') !== null){
    new Glider(document.querySelector('.recommendation-list'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      rewind:true,
      arrows: {
        prev: '.slider-prev-recommendation',
        next: '.slider-next-recommendation'
      }
    })
  }
})