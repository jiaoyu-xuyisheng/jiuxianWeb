$(function(){
	$('.n').eq(0).css({
	"background":"#fff",
	"color":"#c00",
	"border-bottom":"1px solid #fff",
	"border-top":"2px solid #c00"
	})

	$('.n').mouseover(function(){
	$(this).css({
	"background":"#fff",
	"color":"#c00",
	"border-bottom":"1px solid #fff",
	"border-top":"2px solid #c00"
	});
	$('.n').not($(this)).css({
	"background":"#eee",
	"color":"#666",
	"border-bottom":"1px solid #eee",
	"border-top":"2px solid #aaa"
	})

	})

	$('.notice').eq(0).css({
	"background":"#fff",
	"color":"#c00",
	"border-top":"2px solid #c00"
	})

	$('.notice').mouseover(function(){
		$(this).css({
		"background":"#fff",
		"color":"#c00",
		"border-top":"2px solid #c00"
		});
		$('.notice').not($(this)).css({
		"background":"#eee",
		"color":"#666",
		"border-top":"2px solid #aaa"
		})
	})
})