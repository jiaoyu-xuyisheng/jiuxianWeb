$(function(){
	$('.fixdiv a').hover(function(){
		$(this).stop().animate({"width":"200px"},800).siblings().animate({"width":"48px"},100)
		
	},function(){
		$(this).stop().animate({"width":"48px"},100)
	})



	$('.fixdiv a').eq(0).hover(function(){
		$(this).text("1楼白酒")
	},function(){
		$(this).text("1F")
	})

	$('.fixdiv a').eq(1).hover(function(){
		$(this).text("2楼葡萄酒")
	},function(){
		$(this).text("2F")
	})

	$('.fixdiv a').eq(2).hover(function(){
		$(this).text("3楼洋酒")
	},function(){
		$(this).text("3F")
	})

	$('.fixdiv a').eq(3).hover(function(){
		$(this).text("4楼啤酒")
	},function(){
		$(this).text("4F")
	})

	$('.fixdiv a').eq(4).hover(function(){
		$(this).text("5楼零食")
	},function(){
		$(this).text("5F")
	})

	$('.fixdiv a').eq(5).hover(function(){
		$(this).text("回到顶部")
	},function(){
		$(this).text("up")
	})

		var floor1=parseInt($('.floor').eq(0).offset().top)-270

		var floor2=parseInt($('.floor').eq(1).offset().top)-270
		var floor3=parseInt($('.floor').eq(2).offset().top)-270
		var floor4=parseInt($('.floor').eq(3).offset().top)-270
		var floor5=parseInt($('.floor').eq(4).offset().top)-270
	function sideFixd(){
		var scrollTop1=document.body.scrollTop||document.documentElement.scrollTop;
		var a1=1500;
		var a2=4500;
		var ww=$(window).width();
		if(ww>540){
			if (scrollTop1>a1&&scrollTop1<a2) {
				$('.fixdiv').slideDown()
			} else{
				$('.fixdiv').slideUp()
			}
		}
		else{
			$('.fixdiv').hide()
		}
	}

	sideFixd();
	$(window).scroll(function(e){
		var scrollTop1=document.body.scrollTop||document.documentElement.scrollTop;
		sideFixd();
		if (scrollTop1>=floor1&&scrollTop1<floor2) {
			$('.fixdiv a').eq(0).addClass("addf").siblings().removeClass("addf")
		}else if(scrollTop1>=floor2&&scrollTop1<floor3) {
			$('.fixdiv a').eq(1).addClass("addf").siblings().removeClass("addf")
		}else if (scrollTop1>=floor3&&scrollTop1<floor4) {
			$('.fixdiv a').eq(2).addClass("addf").siblings().removeClass("addf")
		}else if (scrollTop1>=floor4&&scrollTop1<floor5) {
			$('.fixdiv a').eq(3).addClass("addf").siblings().removeClass("addf")
		}else if (scrollTop1>=floor5) {
			$('.fixdiv a').eq(4).addClass("addf").siblings().removeClass("addf")	
		}



	})

	



})