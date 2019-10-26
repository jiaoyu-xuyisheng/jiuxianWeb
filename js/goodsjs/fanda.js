$(function(){
	$('.sm-img-box').hover(function(){
		var idxSmimg=$(this).index()
		$(this).addClass("addsm").siblings().removeClass("addsm")
		$('.mid-imgbox').eq(idxSmimg).show().siblings().hide()
		$('.big-imgbox').eq(idxSmimg).show().siblings().hide()
	},function(){
		$(this).removeClass("addsm")
	})

	$('.fandadiv').hover(function(){
		$('.fanda-big-pic').show()
	},function(){
		$('.fanda-big-pic').hide()
	})
	$('.fanda-mid-pic').hover(function(){
		$('.fandadiv').show()
	},function(){
		$('.fandadiv').hide()
	})

	$('.mask').mouseover(function(e){
		var e=e||window.event;

		var bigx=$('.fanda-mid-pic').offset().left;
		var bigy=$('.fanda-mid-pic').offset().top;
		var width1=$('.fandadiv').outerWidth()/2;
		var height1=$('.fandadiv').outerHeight()/2;
		
		var FX=e.pageX-bigx-width1;
		var FY=e.pageY-bigy-height1;
		if(FX<0){FX=0;}else if(FX>440-220){FX=220}
		if(FY<0){FY=0}else if(FY>220){FY=220}
		$('.fandadiv').css({
			"left":FX+"px",
			"top":FY+"px"

		})
	var px=FX/(440-220);
	var py=FY/(440-220);
		var BX=-px*(800-400);
		var BY=-py*(800-400);
	$('.big-imgbox').css({
			"left":BX+"px",
			"top":BY+"px"

		})


	})

	function number1(){
		var num1=$('#num');
		var val1=num1.val();
		var pv=parseInt(val1);

		num1.keyup(function(){
		
		if (isNaN(pv)||pv<1) {pv=1}
			num1.val(pv)
		})
			
		$('.add1').click(function(){
			pv++;
			num1.val(pv)
		})

		$('.reduce1').click(function(){
			pv--;
			if(pv<1){pv=1}
			num1.val(pv)
		})

	}
	number1()


})