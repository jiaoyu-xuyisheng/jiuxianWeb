$(function(){

	function tablist(list,showlist){
		$(list).hover(function(){
		var idxJX=$(this).index(list)
		$(showlist).eq(idxJX).show();
		$(showlist).not($(showlist).eq(idxJX)).hide()
	})
	}
	tablist(".jianxiang",".this-con")
	tablist(".zhengxiang",".that-con")

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

     lbimg(".white-lb",".white-lb-imgbox",".lbimgli",".num1",".lamp1","lamp-add","","",210)
     lbimg(".red-lb",".red-lb-imgbox",".lbimgli2",".num2",".lamp2","lamp-add2","","",210)
	lbimg(".yang-lb",".yang-lb-imgbox",".lbimgli3",".num3",".lamp3","lamp-add3","","",210)
	lbimg(".pi-lb",".pi-lb-imgbox",".lbimgli4",".num4",".lamp4","lamp-add4","","",210)
	lbimg(".lin-lb",".lin-lb-imgbox",".lbimgli5",".num5",".lamp5","lamp-add5","","",210)
})