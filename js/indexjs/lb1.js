
$(function(){
	var i=0;
	var time;
	/*这是一个定时轮播；*/
	autoplay()
	/*将定时轮播封装*/
	 function autoplay(){
	 	time=setInterval(function(){
			i=i+1;
			if(i==4){
			i=0;
			}
			showing()
			},3000)
	 	}
		/*将图片显示封装*/
function showing(){
$('.lb-img').eq(i).fadeIn(500).siblings().fadeOut(500);
$('.lamp').eq(i).addClass("lampaddclass").siblings().removeClass("lampaddclass")
	 }
	/* 指示灯事件*/
	 $('.lamp').hover(function(){
	 i=$(this).index('.lamp')
	 	showing()
	 	clearInterval(time)
	 },function(){
	 	autoplay()
	 })

	 $('.lb-left').hover(function(){
	 	clearInterval(time);
	 },function(){
	 	autoplay();
	 })
	 $('.lb-right').hover(function(){
	 	clearInterval(time);
	 },function(){
	 	autoplay();
	 })

	 $('.lb-left').click(function(){
	 	i=i-1;
	 	if(i<0){
	 		i=3
	 	}
	 	showing()
	 })
	 $('.lb-right').click(function(){
	 	i=i+1;
			if(i==4){
			i=0;
			}
			showing()

	 })


	
})