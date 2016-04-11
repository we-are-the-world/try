/**
 * 事件添加函数(惰性加载)
 * @param { Element  } ele     触发事件的Dom对象
 * @param { String   } event   触发的事件类型
 * @param { Fucntion } func    事件触发执行的函数
 */
var addEvent = (function() {
    if (document.addEventListener) {
        return function(ele, event, func) {
            ele.addEventListener(event, func, false);
        };
    } else if (document.attachEvent) {
        return function(ele, event, func) {
            ele.attachEvent("on" + event, func);
        };
    } else {
        return function(ele, event, func) {
            ele["on" + event] = func;
        };
    }
})();
/**
 * 查找元素中是否具有某个class名
 * @param  {HTMLElement}  element 待查找的html元素
 * @param  {String}  sClass  查找的类名
 * @return {Boolean}         存在为true，否则为false
 */
function hasClass(element, sClass) {
    if (element && element.className) {
        return element.className.match(new RegExp("\\b" + sClass + "\\b")) ? true : false;
    } else {
        return false;
    }
}

(function() {
    var oBtn = document.getElementById("btn");
    addEvent(oBtn, "click", function() {
        var popLayer = document.getElementById("popLayer");
        poplayer.style.display = "block";
    });
})();

function popUp(id) {
    var popLayer = document.getElementById(id);
    addEvent(popLayer, "click", function(ev) {
        if (hasClass(ev.target, "poplayer-mask") || hasClass(ev.target, "close-mask")) {
            popLayer.style.display = "none";
        }
    });
}
popUp("poplayer");
