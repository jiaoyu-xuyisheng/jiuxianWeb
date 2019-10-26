$(function(){
	$('.favour-lamp').eq(0).css({"background":"#c00"});
	$('.favour-lamp').click(function(){
		$(this).css({"background":"#c00"});
		$('.favour-lamp').not($(this)).css({"background":"#aaa"});

			var idxFavour=$(this).index();
			var s=-1198;
		$('.favour-bigbox').stop().animate({
			"left":idxFavour*s+"px"
		},1000)


	})

	var m=0;
	$('.favour-left').click(function(){
		m++;
		if(m>2){
			m=2
		}
		var s=-1198;
		$('.favour-bigbox').stop().animate({
			"left":m*s+"px"
		},1000)
		$('.favour-lamp').eq(m).css({"background":"#c00"}).siblings().css({"background":"#aaa"});
	
	})

	$('.favour-right').click(function(){
		m--;
		if(m<0){
			m=0
		}
		var s=-1198;
		$('.favour-bigbox').stop().animate({
			"left":m*s+"px"
		},1000)
		$('.favour-lamp').eq(m).css({"background":"#c00"}).siblings().css({"background":"#aaa"});
	
	})

	


})