window.addEventListener('load',function (){
  new Glider(document.querySelector('.collection-list-slider-d'), {
    slidesToShow: 4,
    slidesToScroll: 1,
    rewind:true,
    arrows: {
      prev: '.slider-prev',
      next: '.slider-next'
    }
  })
})
