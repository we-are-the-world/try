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
 * @param { Function } handler    需要移除的执行函数
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
 * 事件代理
 * @param   {HTMLElement}   element   需要进行事件代理的父元素。
 * @param   {string}   tag       需要触发事件的标签名
 * @param   {string}   eventName 触发的事件类型
 * @param   {function} listener  事件执行的函数
 */
function delegateEvent(element, tag, eventName, listener) {
    return addEvent(element, eventName, function(ev) {
        var oEvent = ev || event; //兼容处理
        var target = oEvent.target || oEvent.srcElement; //兼容处理
        if (target.tagName.toLocaleLowerCase() === tag) {
            listener.call(target, oEvent); //使用call方法修改执行函数中的this指向，现在this指向触发了事件的HTML节点（可直接使用this.innerHTML返回该节点内容）
        }
    });
}

/**
 * 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
 * @param  {Array}   arr 需要进行遍历的数组
 * @param  {Function} fn  对于数组项所执行的函数
 * fn(arr[i], i)
 * @config 数组项，索引
 */
function each(arr, fn) {
    for (var i = 0, len = arr.length; i < len; i++) {
        fn(arr[i], i); //遍历传参
    }
}
//
/**
 * 数组去重，只考虑数组中元素为数字或字符串，返回一个去重后的数组
 * @param  {Array} arr 需要进行处理的数组
 * @return {Array}     去重后的数组
 */
function uniqArray(arr) {
    // your implement
    var result = []; //创建一个新数组。
    for (var i = 0, l = arr.length; i < l; i++) {
        if (result.indexOf(arr[i]) === -1) { //查找是否已经含有该元素
            result.push(arr[i]); //添加到新数组
        }
    }
    return result; //返回新数组

}
/**
 * 字符串去除首尾空白
 * @param  {String} str 待处理的字符串
 * @return {String}     去除空白后的字符串
 */
function trim(str) {
    // your implement
    var result = "";
    result = str.replace(/^\s+|\s+$/g, ""); //使用正则进行字符串替换
    return result;
}


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
 * @param   {String} attr 在对象中寻找的样式属性
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
 * @param  {Object} ev           事件对象
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
 * @param {HTMLElement} element 拖拽移动的DOM对象
 * @param {String} selector     css选择器带前缀如`#`等，触发鼠标事件的对象（必须在DOM对象中）
 * @param {Function} func       在鼠标移动的时候做一些什么
 */
function setDrag(element, selector, func) {

    var moveObj = element.querySelector(selector);

    addEvent(moveObj, "mousedown", onMousedown);

    /*
        鼠标按下
     */
    function onMousedown(ev) {
        var oEvent = ev || window.event;
        //获取鼠标在容器内的位置
        var disX = oEvent.clientX - element.offsetLeft;
        var disY = oEvent.clientY - element.offsetTop;
        //缓存this
        var _this = element;
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

