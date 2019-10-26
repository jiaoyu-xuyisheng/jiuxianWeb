//这个函数是为了适应格式 比如：01分01秒;
window.onload=setInterval(function(){
    //倒计时函数
    function newTime (year,month,day,hours,min,ss,idday,idhouse,idmin,idss){
        //定义当前时间
        var startTime = new Date(); 
        //定义结束时间
        var endTime = new Date(year,month,day,hours,min,ss);
        //算出中间差并且已毫秒数返回; 除以1000将毫秒数转化成秒数方便运算；
        var countDown = (endTime.getTime() - startTime.getTime())/1000;
        
        //获取天数 1天 = 24小时  1小时= 60分 1分 = 60秒
        var oDay = parseInt(countDown/(24*60*60));       
        //获取小时数        
        var oHours = parseInt(countDown/(60*60)-(oDay*24));
        //获取分钟数      
        var oMinutes = parseInt(countDown/60-(oDay*24*60)-(oHours*60));      
        //获取秒数  
        var oSeconds = parseInt(countDown-(oDay*24*60*60)-(oHours*60*60)-(oMinutes*60));
        //将得到的时分秒填入strong中；
        document.getElementById(idday).innerHTML=oDay;
        document.getElementById(idhouse).innerHTML=oHours;
        document.getElementById(idmin).innerHTML=oMinutes;
        document.getElementById(idss).innerHTML=oSeconds;
    }
   //传参数；
    newTime (2017,8,26,15,30,00,"day_show","hour_show","minute_show","second_show")
   
    },1000)