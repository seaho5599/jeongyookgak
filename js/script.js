$(document).ready(function(){
  // 팝업닫기
  let popup = $('.popup');
  let popup_close = $('.popup-close');
  let header = $('.header');
  let header_top = $('.header-top');
  popup_close.click(function(event){
    // a 태그의 href 로 이동하는 기능 막기
    event.preventDefault();
    
    popup.hide();
  });
  $(window).scroll(function(){
    // 스크롤바의 위치를 파악한다.
    let temp = $(window).scrollTop();
    // .header-top 숨기기
    if(temp > 0) {
      header.addClass('header-fix');
      header_top.addClass('popup-top-close');
    }else{
      header.removeClass('header-fix');
      header_top.removeClass('popup-top-close');
    }

  });




});

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

  // $(document).mouseup(function (e){
  //   if($(".popup-close").has(e.target).length === 0){
  //     $(".popup").hide();
  //   }
  // });


}