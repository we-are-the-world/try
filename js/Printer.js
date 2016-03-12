var Printer = {};
var str = "", dom, curElement, followCurTimer;
/**
 * speed:         打印帧数
 * selectorId:    输出目标的id
 * startIndex:    从索引值为第几的字符开始打印
 * endIndex:      在索引值为第几的字符处结束
 * lnStr:         行首默认打印
 * hasCur:        是否有光标
 * curId:         光标id
 * curStr:        光标字符
 * curStyle:      光标样式
 * curSpeed:      光标闪动帧数
 */
var options = {
    speed: 50,
    selectorId: "show-board",
    startIndex: 0,
    endIndex: 0,
    lnStr: "and...",
    hasCur: true,
    curId: "cur",
    curStr: "_",
    curStyle: "font-weight: bold; color: #27F10B",
    curSpeed: 100
};

/**
 * 初始化
 * @param  {String} arg_str
 * @param  {Object} arg_options
 *
 */
Printer.init = function(arg_str, arg_options) {
    str = arg_str;
    for(var optionKey in arg_options) {
        options[optionKey] = arg_options[optionKey];
    }
    dom = document.getElementById(options.selectorId);
    Printer.endIndex = Printer.endIndex >= str.length ? 0 : Printer.endIndex;
    Printer.hasCur && followCur();
    return this;
};

/**
 * 逐个打印字符
 *
 */
Printer.print = function() {
    for(var i = 0, len = str.length; i < len; i++) {
        (function(index) {
            setTimeout(function() {
                if(str.charAt(index) === "\n") {
                    dom.innerHTML += "<br />" + options.lnStr;
                } else {
                    dom.innerHTML += str.charAt(index);
                }
            }, options.speed * (index + 1));
        })(i);
    }
    setTimeout(function() {
        if(options.hasCur) {
            var element = document.createElement("span");
            element.id = options.curId;
            dom.appendChild(element);
            curElement = element;
            clearTimeout(followCurTimer);
            setInterval(chCur, options.curSpeed);
        }
    }, options.speed * str.length);
};

/**
 * 跟随光标
 *
 */
function followCur() {
    dom.innerHTML += "<span id=" + options.curId + " style=" + options.curStyle + ">" + options.curStr + "</span>";
    followCurTimer = setTimeout(followCur, 1.5 * options.curSpeed);
}

/**
 * 闪烁光标
 *
 */
function chCur() {
    curElement.innerHTML = (curElement.innerHTML == "") ? options.curStr : "";
}
