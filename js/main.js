
$(function(){
		//fullpage设置部分
        $("#fullpage").fullpage(
        	{
				sectionsColor:["#F35626","#C0D4FF","#00afac","#EC7C23","#E868FD"],
				continuousVertical:true,
				navigation:true,
				navigationTooltips:["第一屏","第二屏","第三屏","第四屏","第五屏"],
				scrollingSpeed:850,
				easing:"easeInQuart",
				navigationColor:"#CCC",
				afterLoad : function(anchorLink,index){
					if(index == "2"){
						$(".part1").animate({left:"0px",top:"20px"},500);
						$(".part2").animate({right:"0px",top:"20px"},500);
						
					}
				},
				onLeave: function(index,nextIndex,direction){
					if(index == "2"){
						$(".part1").animate({left:"-1200px"},500);
						$(".part2").animate({right:"-1200px"},500);
					}
				}
        	}
        );
        
        //字体渐变部分
        
        var i = 1;
        var speed = 256;
        var getColor;
        
        var colorArr;
        var colorString;
        var colorNum;
        	function changeColor(){
        	
			getColor = $(".part1 *").css("color");
			colorArr = getColor.split(/[(,)]/);  //获取颜色三元素值
			colorString = parseInt(colorArr[1]).toString(16) + parseInt(colorArr[2]).toString(16) + parseInt(colorArr[3]).toString(16);//转化为字符串 
			colorNum =  parseInt(colorString,16);
			if( i <= 200)   //BUG
			{
				colorNum = colorNum + speed ; 
				i++;
			}
			else 
			{
				colorNum = colorNum - speed;
				if(parseInt(colorArr[2]) <= 20)    //BUG
				{
					i = 0;
				}
			}
			//console.log(colorNum);
			colorString = colorNum.toString(16);  //转化为字符串,转化成功
			//console.log(colorString);
			$(".part1 *").css("color", '#' + colorString);
			$(".part2 *").css("color", '#' + colorString);
			//console.log( $(".part1 *").css("color"));
			}
			
			
			var timer = setInterval(changeColor,100);
        
        
    });
=======
(function () {
    $(document).ready(function () {
        $("#fullpage").fullpage({
            sectionsColor: ["#DE3F3F", "#1795B7", "#4EB7E2", "#21E121", " #8F8484"],
            "verticalCentered": false, //垂直居中
            // "scrollingSpeed":1000,//页面切换速度
            "anchors": ["section1", "section2", "section3", "section4", "section5"], //定义锚链接
            fixedElement: "selector", //fixed的元素
            "navigation": true, //显示导航
            "navigationTooltips": ["徐志鹏", "李言", "韩特", "陈国文", "陈伟钰"], //hover到导航上提示的信息
            "showActiveTooltip": true, //自动显示提示信息
            "slidesNavigation": true, //横向幻灯片导航
            "continuousVertical": true, //连续滚动
            afterLoad: function(archorLink, index) {
                if(index == 3) {
                    if(!$('.section3 #show_board').children().length) {
                        var str  = "Q: 姓名? \n";
                            str += "A: 韩特\n";
                            str += "Q: 学前端多久啦？\n";
                            str += "A: 半年吧...\n";
                            str += "Q: 好玩么\n";
                            str += "A: 好~玩~\n";
                            str += "Q: 好了下一位\n";
                            str += "A: ..........\n";
                            str += "A: 等一下!你也许还没记住我";
                            str += "(点击屏幕继续)";
                        Printer.init(str, {
                            speed: 100,
                            lnStr: "",
                            selectorId: 'show_board'
                        }).print();
                    }
                    $('.cmd').click(function(event) {
                        $('.cmd').fadeOut(1000);
                        $('.section3 .hide').delay(1000).slideDown(1000);
                    });
                    $('.info span.btn').click(function(event) {
                        $('.section3 .hide').hide(800);
                        $('.cmd').delay(1000).fadeIn(1000);
                    });
                    $('.info').mouseenter(function(event) {
                        $(this).find('.info_deco').not(':animated').animate({
                            display: "inline-block",
                            width: "100%"
                        }, 400);
                    });
                    $('.info').mouseleave(function(event) {
                        $(this).find('.info_deco').animate({
                            width: 0,
                            display: "inline-block"
                        }, 400);
                    });
                }
            }
        });
    });

    var guowen = function () { 

    };
    
})();
>>>>>>> 66e484ef8cc5a2f97ab4d636de6e74419a93fbca
