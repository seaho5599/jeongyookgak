$(document).ready()
window.onload = function () {
  new Swiper('.sw-event', {
    loop: true,
    pagination: {
      el: '.sw-event-control-main',
      type: 'fraction',
    },
    navigation: {
      prevEl: '.sw-event-prev',
      nextEl: '.sw-event-next'
    },
  });
}