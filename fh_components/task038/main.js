/**
 * Created by guowen on 2016/4/14.
 */

var Klass = [{
    "姓名": "小红",
    "数学": 89,
    "语文": 99,
    "英语": 77,
    "总分": 265
}, {
    "姓名": "阿文",
    "数学": 99,
    "语文": 90,
    "英语": 33,
    "总分": 222
}, {
    "姓名": "小白",
    "数学": 22,
    "语文": 65,
    "英语": 54,
    "总分": 141
}, {
    "姓名": "小黑",
    "数学": 77,
    "语文": 77,
    "英语": 77,
    "总分": 231
}, {
    "姓名": "小曹",
    "数学": 44,
    "语文": 88,
    "英语": 34,
    "总分": 166
}];


var createTable = function(arr) {
    var table = document.getElementById("fh-table");
    //设置表头
    (function() {
        var tr = document.createElement("tr");
        var con = 0;
        for (var i in arr[0]) {
            con++;
            if (con > 1) {
                tr.innerHTML += "<th><span>" + i + "</span><div><i class='fh-up'>&and;</i><i class='fh-down'>&or;</i></div></th>";

            } else {
                tr.innerHTML += "<th>" + i + "</th>";
            }
        }
        var andOr = tr.querySelectorAll("span");
        // andOr.style
        table.createTHead().appendChild(tr);
    })();
    var initTbody = function(table, arr) {
        var tr;
        var tbody = document.createElement("tbody");
        tbody.innerHTML = "";
        each(arr, function(ele, index) {
            tr = document.createElement("tr");
            for (var i in ele) {
                tr.innerHTML += "<td>" + ele[i] + "</td>";
            }
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    };
    initTbody(table, arr);
    /**
     * 事件代理执行。排序，并且重新渲染tbody
     * @param  {Array} arr     在这里是就传进来的数组。
     * @param  {String} conText 这里表示当前排序的类别
     * @param  {Boolean} up      正序，还是倒序
     */
    var delegateFun =function(arr, conText, up) {
        if (up) {
            arr.sort(function(a, b) {
                return a[conText] - b[conText];

            });
        } else {
            arr.sort(function(a, b) {
                return b[conText] - a[conText];
            });
        }
        table.removeChild(table.querySelector("tbody"));
        initTbody(table, arr);
    };
    /*
        事件代理，实现在点击上下箭头时，进行排序，并且重新渲染整个表格中的数据
     */
    delegateEvent(table.tHead, "i", "click", function(ev) {
        ev.preventDefault();
        var klassName = this.parentNode.parentNode.querySelector("span").innerText;
        var up;
        if (hasClass(this, "fh-up")) {
            up = true;
        } else {
            up = false;
        }
        delegateFun(arr, klassName, up);
    });

};
createTable(Klass);
