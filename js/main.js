(function () {
    $(document).ready(function () {
        $("#fullpage").fullpage({
            sectionsColor: ["#DE3F3F", "#C0D4FF", "#4EB7E2", "#21E121", " #8F8484"],
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
                if(index == "2"){
					$(".part1").animate({left:"0rem",top:"1rem"},500);
					$(".part2").animate({right:"0rem",top:"1rem"},500);
					} 
                   
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

                if (index == 5){
                    $('#chen_intro1').delay(100).animate({
                        top:"12%",
                        left:"25%"
                    },1000);

                    $('#chen_intro2').delay(400).animate({
                        top:"12%",
                        right:"25%"
                    },1000);

                    $('#chen_intro3').delay(700).animate({
                        left:"25%",
                        bottom:"20%"
                    },1000);

                    $('#chen_intro4').delay(1000).animate({
                        right:"25%",
                        bottom:"20%"
                    },1000);

                    $('#chen_intro5').delay(2000).fadeIn(1500);                                                                                
                }                
               
            },
		    onLeave: function(index,nextIndex,direction){
				if(index == "2"){
					$(".part1").animate({left:"-60rem"},500);
					$(".part2").animate({right:"-60rem"},500);
				}

                if (index == 5){
                    $('#chen_intro1').animate({
                        top:"-12%",
                        left:"-25%"
                    },80);

                    $('#chen_intro2').animate({
                        top:"-12%",
                        right:"-25%"
                    },80);

                    $('#chen_intro3').animate({
                        left:"-25%",
                        bottom:"-20%"
                    },80);                 

                    $('#chen_intro4').animate({
                        right:"-25%",
                        bottom:"-20%"
                    },80);

                    $('#chen_intro5').fadeOut(80);                                        
                }                
			}
            
        });
        
        //字体渐变部分 MaxWell
        
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
			if( i <= 200){   //有BUG
				colorNum = colorNum + speed ; 
				i++;
			}
			else{
				colorNum = colorNum - speed;
				if(parseInt(colorArr[2]) <= 20){  //有BUG
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

    var guowen = function () { 

    };
    
})();
