/*
  작성자: 김세호
  작성일: 2022-07-07
  요구기능: 
  1. 참조사이트 : https://www.jeongyookgak.com/
  2. 베스트 상품 테이터 출력을 위한 사항을 기재하시오.
  3. 총 데이터 항목 개수는 6개
  4. 항목별 이름과 구조를 저의하시오.
*/
// // 제품의 데이터 목록
// let goodLink = [];
// //제품의 이미지 목록
// let goodPic = [];
// // 제품의 타이틀 목록
// let goodTitle = [];
// // 제품의 가격 목록
// let goodPrice = [];
// // 제품의 옵션 1 목록
// let goodOption1 =[];
// // 제품의 옵션 2 목록
// let goodOption2 =[];
// // 제품의 옵션 3 목록
// let goodOption3 =[];

// // 객체를 이용한 제품 목록
// let goodList = [
//   {
//     link:'',
//     pic:'',
//     title:'',
//     price:00,
//     op1:'',
//     op2:''

//   },
//   {
//     link:'',
//     pic:'',
//     title:'',
//     price:00,
//     op1:'',
//     op2:''
//   },
//   {
//     link:'',
//     pic:'',
//     title:'',
//     price:00,
//     op1:'',
//     op2:''
//   },
//   {
//     link:'',
//     pic:'',
//     title:'',
//     price:00,
//     op1:'',
//     op2:''

//   },
//   {
//     link:'',
//     pic:'',
//     title:'',
//     price:00,
//     op1:'',
//     op2:''
//   },
//   {
//     link:'',
//     pic:'',
//     title:'',
//     price:00,
//     op1:'',
//     op2:''
//   }
// ];




$(document).ready(function(){
  // 팝업닫기
  let popup = $('.popup');
  let popup_close = $('.popup-close');
  let header = $('.header');
  let header_top = $('.header-top');
  popup_close.click(function(event){
    // a 태그의 href 로 이동하는 기능 막기
    event.preventDefault();
    
    popup_close.click(function(){
      popup.slideUp(300);
    });
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
  let gnb_icons_allmenu = $('.gnb-icons-allmenu'); 
  gnb_icons_allmenu.click(function (event) {
    // a 태그의 href 를 막는다.
    event.preventDefault();
    // 메뉴 보여지는 과정
    menu_more.addClass('menu-more-open');
  });
  let m_control_x = $('.m-control-x');
  let menu_more = $('.menu-more');
  m_control_x.click(function (event) {
    // a 태그의 href 막아준다.
    event.preventDefault();
    // 사라지는 모션 실행
    menu_more.removeClass('menu-more-open');
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

  let bestItem = [
    {
      link:'#',
      img:'item1.png',
      title:'초신선 돼지 삼겹살 구이용',
      data:'기준가 23,400원/600g',
      opt1:'cart-b.svg'

    },
    {
      link:'#',
      img:'item2.png',
      title:'초신선 닭볶음탕',
      data:'기준가 6,700원/950g',
      opt1:'cart-b.svg'
    },
    {
      link:'#',
      img:'item3.png',
      title:'초신선 등심 돈까스',
      data:'기준가 11,800원/770g',
      opt1:'cart-b.svg'
    },
    {
      link:'#',
      img:'item4.png',
      title:'초신선 동물복지 무항생제 유정란',
      data:'기준가 7,800원/12구',
      opt1:'cart-b.svg',
      opt2:'item-bcc.svg'
    },
    {
      link:'#',
      img:'item5.png',
      title:'초신선 무항생제 우유',
      data:'기준가 3,600원/900ml',
      opt1:'cart-b.svg',
      opt2:'item-bcc.svg'
    },
    {
      link:'#',
      img:'item6.png',
      title:'초신선 무항생제 이유식용 한우 우둔 다짐육',
      data:'기준가 15,300원/180g',
      opt1:'cart-b.svg',
      opt2:'item-bcc.svg'
    }
  ];
  function showItemInfo(_tag, _data){
    let item = $(_tag);
    item.attr('href',_data.link);
    let html =`
    <a href="${_data.link}" class="items-img"></a>
            <div class="items-cart"></div>
            
            <h3>${_data.title}</h3>
            <p>${_data.data}</p>
    `;
    
    item.html(html);
    let bg = item.find('.items-img');
    let cart = item.find('.items-cart');
    let tag = item.find('.item-tag');
    bg.css('background', 'url(images/' + _data.img + ') no-repeat center');
    bg.css('background-size', '276px');
    // cart.css('background', 'url(images/' + _data.opt1 + ') no -repeat center');
    // tag.css('background', 'url(images/' + _data.opt2 + ') no-repeat center');
  }
  function showItemBottom(_tag, _data){
    let item = $(_tag);
    item.attr('href',_data.link);
    let itemBottom = `
    <a href="${_data.link}" class="items-img"></a>
            <div class="items-cart"></div>
            <div class="items-tag"></div>
            <h3>${_data.title}</h3>
            <p>${_data.data}</p>

    `;
    item.html(itemBottom);
    let bg = item.find('.items-img');
    bg.css('background', 'url(images/' + _data.img + ') no-repeat center');
    bg.css('background-size', '276px');
  }
  showItemInfo('#item-list-1', bestItem[0]);
  showItemInfo('#item-list-2', bestItem[1]);
  showItemInfo('#item-list-3', bestItem[2]);
  // showItemInfo('#item-list-4', bestItem[3]);
  // showItemInfo('#item-list-5', bestItem[4]);
  // showItemInfo('#item-list-6', bestItem[5]);
  showItemBottom('#item-list-4', bestItem[3]);
  showItemBottom('#item-list-5', bestItem[4]);
  showItemBottom('#item-list-6', bestItem[5]);
}