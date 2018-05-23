// INSPINIA Landing Page Custom scripts
$(document).ready(function () {

    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    })

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 70
        }, 500);
        event.preventDefault();
    });

});

// Activate WOW.js plugin for animation on scrol
new WOW().init();
//导航切换
$(".navbar-toggle").click(function(){
	if($("#navbar").hasClass("in")){
		$(this).find("img").attr("src","images/icon-older.png");
	}else{
		$(this).find("img").attr("src","images/icon-older-c.png");
	}
})
//合作伙伴轮播
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
	el: '.swiper-pagination',
	clickable: true,
  },
});
//导航锚点
$(".nav li a").click(function(){
	$("#navbar").removeClass("in");
	$("#navbar").attr("aria-expanded","false");
});
$(window).scroll(function(){
	$("#navbar").removeClass("in");
	$("#navbar").attr("aria-expanded","false");
})