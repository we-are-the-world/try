(function () {
    $(document).ready(function () {
        $("#fullpage").fullpage({
            // sectionsColor: ["#DE3F3F", "#1795B7", "#E61888", "#21E121", " #8F8484"],
            "verticalCentered": false, //垂直居中
            // "scrollingSpeed":1000,//页面切换速度
            "anchors": ["section1", "section2", "section3", "section4", "section5"], //定义锚链接
            // "paddingTop": "100px", //距离顶部与底部的距离
            // "paddingBottom": "100px",
            fixedElement: "selector", //fixed的元素
            "navigation": true, //显示导航
            "navigationTooltips": ["徐志鹏", "李言", "韩特", "陈国文", "陈伟钰"], //hover到导航上提示的信息
            "showActiveTooltip": true, //自动显示提示信息
            "slidesNavigation": true, //横向幻灯片导航
            "continuousVertical": true, //连续滚动
            "afterLoad": function (anchorLink, index) {
                console.log("afterLoad:anchorLink" + anchorLink + ",index:" + index);
            },

        });
    });

    var guowen = function () {

    };

})();
