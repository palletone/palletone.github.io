 function IEVersion() {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            if(isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion == 7) {
                    return 7;
                } else if(fIEVersion == 8) {
                    return 8;
                } else if(fIEVersion == 9) {
                    return 9;
                } else if(fIEVersion == 10) {
                    return 10;
                } else {
                    return 6;//IE版本<=7
                }   
            } else if(isEdge) {
                return 'edge';//edge
            } else if(isIE11) {
                return 11; //IE11  
            }else{
                return -1;//不是ie浏览器
            }
        }
		var type = IEVersion();
		if(type < 10 && type != -1){
			
			
		}else{
			new WOW().init();
		}

$(window).scroll(function(){
	var height = $(window).scrollTop();
	if(height>300){
		$(".header").addClass("header-fix");
	}else{
		$(".header").removeClass("header-fix");
	}
});
//导航锚点
$(".nav li a").click(function(){
	var id = $(this).attr("rel");
	var top = $("#"+id+"").offset().top - 90;
	$("body,html").animate({scrollTop:top},1000);
});
//中英文切换
$(".change-btn").click(function(){
	var text = $(this).val();
	if(text == "English"){
		$(this).attr("value","中文");
	}else{
		$(this).attr("value","English");
	}
})
//timeline
$(".timeline li").hover(function(){
	$(this).siblings().find("h2").hide();
	$(this).find("h2").show()
	$(this).siblings().find("p").hide();
	$(this).find("p").show()
	$(this).siblings().find(".arrow").hide();
	$(this).find(".arrow").show()

},function(){
})
