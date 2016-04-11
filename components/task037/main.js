/**
 * 事件添加函数(惰性加载)
 * @param { HTMLElement  } ele     触发事件的Dom对象
 * @param { String   } event       触发的事件类型
 * @param { Fucntion } handler     事件触发执行的函数
 */
var addEvent = (function() {
    if (document.addEventListener) {
        return function(ele, event, handler) {
            ele.addEventListener(event, handler, false);
        };
    } else if (document.attachEvent) {
        return function(ele, event, handler) {
            ele.attachEvent("on" + event, handler);
        };
    } else {
        return function(ele, event, handler) {
            ele["on" + event] = handler;
        };
    }
})();

/**
 * 事件移除函数(惰性加载)
 * @param { HTMLElement  } ele    需要移除事件的Dom对象
 * @param { String   } event      移除的事件类型
 * @param { Fucntion } handler    需要移除的执行函数
 */
var removeEvent = (function() {
    if (document.removeEventListener) {
        return function(ele, event, handler) {
            ele.removeEventListener(event, handler, false);
        };
    } else if (document.detachEvent) {
        return function(ele, event, handler) {
            ele.detachEvent("on" + event, handler);
        };
    } else {
        return function(ele, event, handler) {
            ele["on" + event] = null;
        };
    }
})();

/**
 * 查找元素中是否具有某个class名
 * @param  {HTMLElement}  element 待查找的Dom对象
 * @param  {String}  sClass       查找的类名
 * @return {Boolean}              存在为true，否则为false
 */
function hasClass(element, sClass) {
    if (element && element.className) {
        return element.className.match(new RegExp("(\\s|^)" + sClass + "(\\s|$)")) ? true : false;
    } else {
        return false;
    }
}



function popUp(id) {
    var popLayer = document.getElementById(id);
    addEvent(popLayer, "click", function(ev) {
        console.log(hasClass(ev.target, "poplayer"));
        if (hasClass(ev.target, "poplayer-mask") || hasClass(ev.target, "close-mask")) {
            popLayer.style.display = "none";
        }
    });
}

function setDrag(element) {
    addEvent(element, "mousedown", onMousedown);

    function onMousedown(ev) {
        addEvent(document, "mouseup", onMouseup);
        addEvent(document, "mousemove", onMousemove);
    }

    function onMousemove(ev) {
        console.log(ev.clientX);
    }

    function onMouseup() {
        removeEvent(document, "mousemove", onMousemove);
        removeEvent(document, "mouseup", onMouseup);
    }
}
window.onload = function() {
    (function() {
        var oBtn = document.getElementById("btn");
        addEvent(oBtn, "click", function() {
            var popLayer = document.getElementById("popLayer");
            poplayer.style.display = "block";
        });
    })();
    popUp("poplayer");
    var poplayer = document.getElementById("poplayer");
    setDrag(poplayer);
};
