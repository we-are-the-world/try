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
