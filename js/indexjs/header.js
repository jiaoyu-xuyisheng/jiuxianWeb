$(function(){
	$('.float-left').hide();
	$('.list').hover(function(){
		var idxList=$(this).index('.list');
		$(this).css({
			"background":"#f0f",
		})
		$(this).children("p").find("a").css({
			"color":"#fff"
		})
		$('.float-left').eq(idxList).show();
		$('.float-left').not($('.float-left').eq(idxList)).hide();
	},function(){
		$(this).css({
			"background":"#fff",
		})
			$(this).children("p").find("a").css({
			"color":"#666"
		})
		$('.float-left').hide();
	})
})