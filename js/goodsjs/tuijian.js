$(function(){
	$('.check1').click(function(){
		var idx=$(this).index('.check1');
		var thisPrice=parseFloat($('.danjia').eq(idx).text())
		var total=parseFloat($('.totle-all').text())
		var number=parseInt($('.num-wu').text())
		 if ($(this).attr("checked")) {
		 	number++;
			total+=thisPrice
			$('.totle-all').text(parseFloat(total).toFixed(2))
			$('.num-wu').text(parseInt(number))
		 }
		 else{
		 	total-=thisPrice
		 	number--;
		 	$('.totle-all').text(parseFloat(total).toFixed(2))
		 	$('.num-wu').text(parseInt(number))
		 }
	})


	
})	