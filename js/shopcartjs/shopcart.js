$(function(){
function yd(){
		var i=1; 
	var v=-1200;
	$('.guess-left').css({
			"color":"red"
		})


	$('.guess-left').click(function(){
		i++;
		if(i>2){i=2}
		var s=v*(i-1)
	
	$('.guess-bigbox').stop().animate({
		"left":s+"px"
	},1000)
	
	})


	$('.guess-right').click(function(){
		i--;
		if(i<1){i=1}
		var s=v*(i-1)
	
	$('.guess-bigbox').stop().animate({
		"left":s+"px"
	},1000)
		
	})

}
	yd()

		/*这是一个购物车的效果*/

		/*这是加入购物车*/

				$('.addshopcart').click(function(){
			var idx=$(this).index('.addshopcart')
			var jiaprice=parseFloat($(".guess-this-price").eq(idx).html())
			var url=$('.guessimg').eq(idx).attr("src")
			var text6=$(".guess-text").eq(idx).text()
			var sb=$('.one-chose').append($('.tr').last().clone())
			sb.find(".price1").last().html(jiaprice.toFixed(2))
			sb.find(".totalprice").last().html(jiaprice.toFixed(2))
			sb.find(".shopimg").last().attr("src",url)
			sb.find(".text-one1").last().html(text6)



		})
		
		/*这是加入购物车*/



		
		
	/*这是全选*/
		$(document).on("click",'.check',function(){
			if ($(this).attr('class')==="check-all check") {
				$('.check').attr("checked",this.checked)
			}
			if($(this).attr("checked")!="checked"){
				$('.check').attr("checked",false)
			}

			var idx=$(this).index('.checkone');
			var  price=parseFloat($(".totalprice").eq(idx).text())
			var totalpriceBig=parseFloat($(".total-price").text())
			if($(".checkone").eq(idx).attr("checked")=="checked"){
				totalpriceBig+=price

			}
			else if($(".check").attr("checked")!="checked"){

				totalpriceBig-=price
				if(totalpriceBig<0){
					totalpriceBig=price
				}
			}

			$(".total-price").text(totalpriceBig.toFixed(2))
			
					
		})

		/*这是全选*/


	
		/*这是加减计算*/
		for (var i = 0; i < $('.tr').length; i++) {

		function xiaoji(i){
			var danjia=parseFloat($('.price1').eq(i).html())
			var textval=parseInt($(".text1").eq(i).val())

			var totalpriceBig=parseFloat($(".total-price").text())
			$(document).on("click",".add",function(){
				i=$(this).index('.add')
				
				textval++;
				$(".text1").eq(i).val(textval)
				var newprice=danjia*textval
				if ($('.checkone').eq(i).attr("checked")=="checked") {
				totalpriceBig=newprice
				
				$(".total-price").text(totalpriceBig.toFixed(2))}
				$(".totalprice").eq(i).text(newprice.toFixed(2))


			})
			$(document).on("click",".reduce",function(){
				i=$(this).index(".reduce")
				
				textval--;
				if (textval<1) {textval=1}
				$(".text1").eq(i).val(textval)
				var newprice=danjia*textval
				if ($('.checkone').eq(i).attr("checked")=="checked") {
				totalpriceBig=newprice
			
				$(".total-price").text(totalpriceBig.toFixed(2))}
				$(".totalprice").eq(i).text(newprice.toFixed(2))

			})
			$(document).on("keyup",'.text1',function(){
				if (isNaN(textval)||textval<1) {
					textval=1
				}
				$(".text1").eq(i).val(textval)
			})
			

			}
		xiaoji(i)
		}
		/*这是加减计算*/


	

 

	
	
})