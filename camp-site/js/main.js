$(function(){
  /*=================================================
  スマホメニュー
  ===================================================*/
  $('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  // リンクをクリックした時にメニューを閉じる
  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });

  $('#navi').on('click', function() {
    $('#header').removeClass('open');
  });

  /*=================================================
  自動スクロール
  ===================================================*/
  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" || href == "#top" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });


  if (window.location.hash) {
    let target = $(window.location.hash);
    if (target.length) {
      let position = target.offset().top;
      $("html, body").animate({scrollTop: position}, 600, "swing");
    }
  }

  /*=================================================
  PICK UP スライダー
  ===================================================*/
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  $(window).scroll(function() {
    $('.fadein').each(function() {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});
