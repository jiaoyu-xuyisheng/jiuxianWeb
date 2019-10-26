$(function(){

	$('.content-tab-nav li').hover(function(){
		var idxN=$(this).index('.content-tab-nav li');
     

		$('.content-tab-con .content-tab-on').eq(idxN).show().siblings().hide()
	})

	$('.notice-board-nav div').hover(function(){
		var idxDiv=$(this).index('.notice-board-nav div');
		$('.notice-board-wrap div').eq(idxDiv).show().siblings().hide();
	})


	  function lb1() {var i = 0;

                var clone = $(".content-right-2 .img1 li").first().clone();//克隆第一张图片
                $(".content-right-2 .img1").append(clone);//复制到列表最后
                var size = $(".content-right-2 .img1 li").size();
               

                for (var j = 0; j < size-1; j++) {
                    $(".content-right-2 .num1").append("<li></li>");
                }

                $(".content-right-2 .num1 li").first().addClass("on");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},2000);

                /*鼠标悬停事件*/

                $(".content-right-2").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 3000); //鼠标移出时清除定时器
                });




                /*鼠标滑入原点事件*/

                $(".content-right-2 .num1 li").hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".content-right-2 .img1").stop().animate({ left: -index * 268 }, 500);
                    $(this).addClass("on").siblings().removeClass("on");
                });




                /*移动事件*/
                function move() {
                    if (i == size) {
                        $(".content-right-2 .img1").css({ left: 0 });
                        i = 1;
                    }//当图片到了最后一张；让其回到第一张；
                    if (i == -1) {
                        $(".content-right-2 .img1").css({ left: -(size - 1) * 268 });
                        i = size - 2;
                    }//当图片到了第一张；让其回到最后一张；
                    //不同的索引；距离左边的距离；为i*图片的宽；
                    $(".content-right-2 .img1").stop().animate({ left: -i * 268 }, 600);
                    //当图片到最后一张图标显示为第一个；
                    if (i == size - 1) {
                        $(".content-right-2 .num1 li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $(".content-right-2 .num1 li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                }}
                lb1()

       function lb2() {var i = 0;

                var clone = $(".content-right-3 .img2 li").first().clone();//克隆第一张图片
                $(".content-right-3 .img2").append(clone);//复制到列表最后
                var size = $(".content-right-3 .img2 li").size();
               

                for (var j = 0; j < size-1; j++) {
                    $(".content-right-3 .num2").append("<li></li>");
                }

                $(".content-right-3 .num2 li").first().addClass("on");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},3000);

                /*鼠标悬停事件*/

                $(".content-right-3").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 3000); //鼠标移出时清除定时器
                });




                /*鼠标滑入原点事件*/

                $(".content-right-3 .num2 li").hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".content-right-3 .img2").stop().animate({ left: -index * 268 }, 600);
                    $(this).addClass("on").siblings().removeClass("on");
                });




                /*移动事件*/
                function move() {
                    if (i == size) {
                        $(".content-right-3 .img2").css({ left: 0 });
                        i = 1;
                    }//当图片到了最后一张；让其回到第一张；
                    if (i == -1) {
                        $(".content-right-3 .img2").css({ left: -(size - 1) * 268 });
                        i = size - 2;
                    }//当图片到了第一张；让其回到最后一张；
                    //不同的索引；距离左边的距离；为i*图片的宽；
                    $(".content-right-3 .img2").stop().animate({ left: -i * 268 }, 600);
                    //当图片到最后一张图标显示为第一个；
                    if (i == size - 1) {
                        $(".content-right-3 .num2 li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $(".content-right-3 .num2 li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                }
                
            }
                lb2()          
            
})