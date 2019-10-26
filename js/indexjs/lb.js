  $(document).ready(function(){

                function lbimg(btnleft){
                var i = 0;
                var clone = $(".banner .img li").first().clone();//克隆第一张图片
                $(".banner .img").append(clone);//复制到列表最后
                var size = $(".banner .img li").size();
                for (var j = 0; j < size-1; j++) {
                    $(".banner .num").append("<li></li>");
                }
                $(".banner .num li").first().addClass("on");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},2000);

                /*鼠标悬停事件*/

                $(".banner").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 4000); //鼠标移出时清除定时器
                });
                /*鼠标滑入原点事件*/

                $(".banner .num li").hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".banner .img").stop().animate({ left: -index * 500 }, 600);
                    $(this).addClass("on").siblings().removeClass("on");
                });
                /*向左按钮*/
                $(btnleft).click(function () {
                    i++;
                    move();
                })                
                /*向右按钮*/
                $(".banner .btn_r").click(function () {
                    i--;
                    move();
                })

                /*移动事件*/
                function move() {
                    if (i == size) {
                        $(".banner .img").css({ left: 0 });
                        i = 1;
                    }//当图片到了最后一张；让其回到第一张；
                    if (i == -1) {
                        $(".banner .img").css({ left: -(size - 1) * 500 });
                        i = size - 2;
                    }//当图片到了第一张；让其回到最后一张；
                    //不同的索引；距离左边的距离；为i*图片的宽；
                    $(".banner .img").stop().animate({ left: -i * 500 }, 600);
                    //当图片到最后一张图标显示为第一个；
                    if (i == size - 1) {
                        $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                }    
                }

                lbimg(".btn_l")
            });