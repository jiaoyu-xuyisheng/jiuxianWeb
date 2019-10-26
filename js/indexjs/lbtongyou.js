$(document).ready(function(){
        function lbimg(wrapbox,imgbigbox,imgbox,lampbox,lamp,lampadd,btnleft,btnright,long){
            

                var i = 0;

                var clone = $(imgbox).first().clone();//克隆第一张图片
                $(imgbigbox).append(clone);//复制到列表最后
                var size = $(imgbox).size();
               

             
                $(lamp).first().addClass(lampadd);

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},2000);

                /*鼠标悬停事件*/

                $(wrapbox).hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 3000); //鼠标移出时清除定时器
                });




                /*鼠标滑入原点事件*/

                $(lamp).hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(imgbigbox).stop().animate({ left: -index * long }, long);
                    $(this).addClass(lampadd).siblings().removeClass(lampadd);
                });



                /*向左按钮*/
                $(btnleft).click(function () {
                    i++;
                    move();
                })

                
                /*向右按钮*/
                $(btnright).click(function () {
                    i--;
                    move();
                })

                /*移动事件*/
                function move() {
                    if (i == size) {
                        $(imgbigbox).css({ left: 0 });
                        i = 1;
                    }//当图片到了最后一张；让其回到第一张；
                    if (i == -1) {
                        $(imgbigbox).css({ left: -(size - 1) * long });
                        i = size - 2;
                    }//当图片到了第一张；让其回到最后一张；
                    //不同的索引；距离左边的距离；为i*图片的宽；
                    $(imgbigbox).stop().animate({ left: -i * long }, 600);
                    //当图片到最后一张图标显示为第一个；
                    if (i == size - 1) {
                        $(lamp).eq(0).addClass(lampadd).siblings().removeClass(lampadd);
                    } else {
                        $(lamp).eq(i).addClass(lampadd).siblings().removeClass(lampadd);
                    }
                }
        }

         lbimg(".banner",".img",".imgbox1",".num",".lamp","on",".btn_l",".btn_r",500);
        
            });