$(document).ready(function () {
  $(window).on('resize', function () {
    var winHei = $(this).height();

    //top_visual 높이 지정
    $('#content .main_topvisual').css('height', winHei); 
  });
  $(window).trigger('resize');

  $(window).on('scroll', function () {
    var scrollT = $(this).scrollTop();

    if (scrollT > $('.main_banner').offset().top - 500) $('.main_banner').addClass('on');
  });

  //터치 슬라이더
  var mySwiper = new Swiper ('.consulting .swiper-container', {
    // 필요한 옵션을 추가함
    //direction: 'vertical',    //horizontal(기본), vertical
    //loop: true,               //가장 처음과 마지막에서 무한 롤링 true, false(기본)
    navigation: {
      nextEl: '.consulting .swiper-button-next',
      prevEl: '.consulting .swiper-button-prev',
    },
    pagination: {
      el: '.consulting .swiper-pagination',
      type: 'bullets',   //bullets(동그라미아이콘), fraction (현재/전체)
      clickable: true,    //클릭하여 슬라이더 이동
      
    },
  });
});