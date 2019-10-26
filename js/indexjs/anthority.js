$(function(){
	$('.auth-top a').hover(function(){
		var idxAuth=$(this).index()
		var s=idxAuth*80
		$('.auth-underline').stop(true,true).animate({
			"left":s+'px'
		},500)
		$('.anth').eq(idxAuth).show().siblings().hide();

	},function(){

	})


	$('.anth-imgbox').hover(function(){
		$(this).animate({
			"margin-left":"-100px"
		},800)
	},function(){
		$(this).animate({
			"margin-left":"0px"
		},800)
	})

})