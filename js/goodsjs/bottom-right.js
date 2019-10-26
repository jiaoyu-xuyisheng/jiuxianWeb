$(function(){
	var h1=$('.bottom-left1').outerHeight()+30
	var h2=$('.bottom-right1').outerHeight()+30
	$('.footer').css({"margin-top":h2+"px"})
	$('.top-list ul li').click(function(){
		$(this).css({
			"border-top":"1px solid #900",
			"border-bottom":"1px solid #fff"
		}).siblings().css({
			"border":"1px solid #A5E2E7"
		})
		var idx=$(this).index('.top-list ul li')
		if (idx==0) {
			$('.footer').css({"margin-top":h2+"px"})
		}else{$('.footer').css({"margin-top":h1+"px"})}
	})
	

	$('.top-list ul li').eq(0).click(function(){
		$('.show-listbox').eq(0).show().$('.show-listbox').eq(1).hide()
		$('.talk').show()
		$('.ask').show()
	})

	$('.top-list ul li').eq(1).click(function(){
		$('.show-listbox').eq(0).hide()
		$('.show-listbox').eq(1).show()
		$('.talk').show()
		$('.ask').show()
	})


	$('.top-list ul li').eq(2).click(function(){
		$('.show-listbox').hide()
		$('.talk').show()
		$('.ask').hide()
	})

	$('.top-list ul li').eq(3).click(function(){
		$('.show-listbox').hide()
		$('.talk').hide()
		$('.ask').show()
	})

	/*评论功能*/

	$('#tijiaowenti').click(function(){
		 var texthtml=$('#textarea1').html();
		$('.ask-con ul').append($("#appendli").clone()).find(".ask-p").last().html(texthtml)
		 $('#textarea1').html(' ');
	})

	/*评论功能*/



	

})