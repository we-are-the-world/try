/**
 * Created by guowen on 2016/4/16.
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
}, {
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
}, {
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

createTable("fh-table", Klass,false);

function theadCongeal(element) {
    addEvent(document, "scroll", function(ev) {
        var tablePosition = element.getBoundingClientRect();
        var tHead = element.tHead;
        var tHeadPosition = tHead.getBoundingClientRect();
        if (tablePosition.top <= 0 && tHeadPosition.top <= 0) {
            tHead.style.position = "fixed";
            tHead.style.top = 0;
        }
        if(tablePosition.top >= 0 ){
            tHead.style.position = "relative";
            tHead.style.top = "auto";
        }
        if(tablePosition.bottom <= 0){
            tHead.style.position = "absolute";
            tHead.style.top = "auto";
        }
    });
}
var table = document.getElementById("fh-table");
theadCongeal(table);
