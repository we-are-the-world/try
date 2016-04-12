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
/**
 * 获取实际样式函数
 * @param   {HTMLElement}   element  需要寻找的样式的Dom对象
 * @param   {String]} attr 在对象中寻找的样式属性
 * @returns {String} 获取到的属性
 */
function getStyle(element, attr) {
    //IE写法
    if (element.currentStyle) {
        return element.currentStyle[attr];
        //标准
    } else {
        return getComputedStyle(element, false)[attr];
    }
}


/**
 * 边界限制函数
 * @param  {HTMLElement} element 需要进行边界限制的Dom对象
 * @param  {Number} away         边界吸附距离
 * @param  {Objec} ev            事件对象
 */
function boundary(element, away, ev) {
    var oEvent = ev || window.event;
    //
    //      屏幕宽高
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    //      容器宽高
    var eleWidth = element.offsetWidth;
    var eleHeight = element.offsetHeight;
    //     判断容器当前左边距
    if ((element.offsetLeft - eleWidth / 2) < away) {
        element.style.left = eleWidth / 2 + "px";
    } else if ((element.offsetLeft + eleWidth / 2) > (clientWidth - away)) {
        element.style.left = clientWidth - eleWidth / 2 + "px";
    }

    //     判断容器当前上边距
    if ((element.offsetTop - eleHeight / 2) < away) {
        element.style.top = eleHeight / 2 + "px";
    } else if ((element.offsetTop + eleHeight / 2) > (clientHeight - away)) {
        element.style.top = 887 + "px";
        element.style.top = clientHeight - eleHeight / 2 + "px";
    }

}

/**
 * 鼠标拖拽函数(相对于可视区)
 * @param {HTMLElement} element 需要进行拖拽的DOM对象
 * @param {Function} func    在鼠标移动的时候做一些什么
 */
function setDrag(element, func) {

    addEvent(element, "mousedown", onMousedown);

    /*
        鼠标按下
     */
    function onMousedown(ev) {
        var oEvent = ev || window.event;

        //获取鼠标在容器内的位置
        var disX = oEvent.clientX - this.offsetLeft;
        var disY = oEvent.clientY - this.offsetTop;

        //缓存this
        var _this = this;
        var dragFlag = true; //容器是否可以被拖拽的
        addEvent(document, "mouseup", onMouseup);
        addEvent(document, "mousemove", onMousemove);
        /*
            鼠标移动
         */
        function onMousemove(ev) {
            var oEvent = ev || window.event;

            if (dragFlag) {
                _this.style.left = oEvent.clientX - disX + "px";
                _this.style.top = oEvent.clientY - disY + "px";
                if (func) {
                    func();
                }
            }

        }
        /*
            鼠标抬起，将事件删除
         */
        function onMouseup() {
            dragFlag = false;
            // removeEvent(document, "mousemove", onMousemove);
            // removeEvent(document, "mouseup", onMouseup);
        }
    }

}
