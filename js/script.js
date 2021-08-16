new WOW().init();

jQuery(".js-drawer").on("click", function(e) {
    e.preventDefault();
    let targetClass = jQuery(this).attr("data-target");
    jQuery("." + targetClass).toggleClass("is-checked");
    return false;
});

jQuery('a[href^="#"]').on('click', function() {

    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != '#'){
      var position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);
  });

// スクロール検知
jQuery(window).on("scroll", function() {
    // トップから100px以上スクロールしたら
    if (100 < jQuery(this).scrollTop()) {
      // is-showクラスをつける
   jQuery('.totop').addClass( 'is-show' );
    } else {
      // 100pxを下回ったらis-showクラスを削除
    jQuery('.totop').removeClass( 'is-show' );
    }
  });

jQuery ('.header__nav li a').on('click', function() {
    jQuery('.header__nav li a').removeClass('is-active');
    jQuery(this).addClass('is-active');
    return false;
});

jQuery('.accordion__head').click(function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.accordion__icon').toggleClass('is-open');
});