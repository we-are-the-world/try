(function() {
	$(document).ready(function() {
		var one = $('#square-one'),
				two = $('#square-two'),
				three = $('#square-three'),
				four = $('#square-four');
		$("#fullpage").fullpage({
			sectionsColor: ["#DE3F3F", "#C0D4FF", "#4EB7E2", "#009688", " #8F8484"],
			"verticalCentered": false, //垂直居中
			// "scrollingSpeed":1000,//页面切换速度
			"anchors": ["section1", "section2", "section3", "section4", "section5"], //定义锚链接
			fixedElement: "selector", //fixed的元素
			"navigation": true, //显示导航
			"navigationTooltips": ["徐智鹏", "李言", "韩特", "陈国文", "陈伟钰"], //hover到导航上提示的信息
			"showActiveTooltip": true, //自动显示提示信息
			"slidesNavigation": true, //横向幻灯片导航
			"continuousVertical": true, //连续滚动

			afterLoad: function(archorLink, index) {
				if (index == 1) {
					
					one.addClass("bounceInDown");
					two.addClass('bounceInRight');
					three.addClass('bounceInLeft');
					four.addClass('bounceInUp');

				} else if (index == "2") {
					$(".part1").animate({
						left: "0rem",
						top: "1rem"
					}, 500);
					$(".part2").animate({
						right: "0rem",
						top: "1rem"
					}, 500);
				}

				if (index == 3) {
					if (!$('.section3 #show_board').children().length) {
						var str = "Q: 姓名? \n";
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
				// 第四屏
				(function(archorLink, index) {
					if (archorLink == "section4" && index == 4) {
						$(".g_guowen_icon").removeClass("rotateOut").addClass("rotateIn animated");
						(function() {
							$(".g_info_content").removeClass("bounceOutLeft").addClass("animated bounceInLeft");
						})();
						$(".g_title").find("p").addClass("animated flip");
						$(".g_flip_container").removeClass("rotateOutDownRight").addClass("animated rotateInDownRight");

					}
				})(archorLink, index);

				if (index == 5) {
					$('#chen_intro1').addClass("chen_anima1");
					$('#chen_intro2').addClass("chen_anima2");
					$('#chen_intro3').addClass("chen_anima3");
					$('#chen_intro4').addClass("chen_anima4");
					$('.section5 p,.section5 h1').addClass("chen_anima5");

				}

			},
			onLeave: function(index, nextIndex, direction) {
				if (index == "1") {
					one.removeClass("bounceInDown");
					two.removeClass('bounceInRight');
					three.removeClass('bounceInLeft');
					four.removeClass('bounceInUp');
				} else if (index == "2") {
					$(".part1").animate({
						left: "-60rem"
					}, 500);
					$(".part2").animate({
						right: "-60rem"
					}, 500);
				}
				// 第四屏
				(function(nextIndex) {
					if (nextIndex == 3 || nextIndex == 5) {
						$(".g_guowen_icon").removeClass("rotateIn").addClass("rotateOut");
						$(".g_info_content").removeClass("bounceInLeft").addClass("bounceOutLeft");
						$(".g_title").find("p").removeClass(" flip");
						$(".g_flip_container").removeClass("rotateInDownRight").addClass("rotateOutDownRight");
					}
				})(nextIndex);

				if (index == 5) {
					$('#chen_intro1').removeClass("chen_anima1");
					$('#chen_intro2').removeClass("chen_anima2");
					$('#chen_intro3').removeClass("chen_anima3");
					$('#chen_intro4').removeClass("chen_anima4");
					$('.section5 p,.section5 h1').removeClass("chen_anima5");

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

		function changeColor() {
			getColor = $(".part1 *").css("color");
			colorArr = getColor.split(/[(,)]/); //获取颜色三元素值
			colorString = parseInt(colorArr[1]).toString(16) + parseInt(colorArr[2]).toString(16) + parseInt(colorArr[3]).toString(16); //转化为字符串
			colorNum = parseInt(colorString, 16);
			if (i <= 200) { //有BUG
				colorNum = colorNum + speed;
				i++;
			} else {
				colorNum = colorNum - speed;
				if (parseInt(colorArr[2]) <= 20) { //有BUG
					i = 0;
				}
			}
			//console.log(colorNum);
			colorString = colorNum.toString(16); //转化为字符串,转化成功
			//console.log(colorString);
			$(".part1 *").css("color", '#' + colorString);
			$(".part2 *").css("color", '#' + colorString);
			//console.log( $(".part1 *").css("color"));
		}


		var timer = setInterval(changeColor, 100);

	});


})();