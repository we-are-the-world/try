(function () {
    $(document).ready(function () {
        $("#fullpage").fullpage({
            "anchors": ["section1", "section2", "section3", "section4", "section5"], //定义锚链接
            sectionsColor: ["#DE3F3F", "#1795B7", "#4EB7E2", "#20BF70", " #8F8484"],
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
                    if(!$('.section3 #t_show_board').children().length) {
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
                            selectorId: 't_show_board'
                        }).print();
                    }
                    $('.t_cmd').click(function(event) {
                        $('.t_cmd').fadeOut(1000);
                        $('.section3 .t_hide').delay(1000).slideDown(1000);
                    });
                    $('.t_info span.t_btn').click(function(event) {
                        $('.section3 .t_hide').hide(800);
                        $('.t_cmd').delay(1000).fadeIn(1000);
                    });
                    $('.t_info').mouseenter(function(event) {
                        $(this).find('.t_info_deco').not(':animated').animate({
                            display: "inline-block",
                            width: "100%"
                        }, 800);
                    });
                    $('.t_info').mouseleave(function(event) {
                        $(this).find('.t_info_deco').animate({
                            width: 0,
                            display: "inline-block"
                        }, 600);
                    });
                }
            },
            onLeave: function(index, direction) {

            }
        });
    });

    var guowen = function () {

    };

})();
