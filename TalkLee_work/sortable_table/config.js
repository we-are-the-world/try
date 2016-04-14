/**
 * Created by MaxWell on 2016/4/12.
 */



//以人为单位填入表格，即单位为行

//表头项目items，值表示是否可以进行排序
var config = {
    items:{
        Name:false,
        Chinese:false,
        English:true,
        Math:true,
        Sum:true
    },

    Infor_arr:[
        ["小明",80,90,70,240],
        ["小红",90,60,90,240],
        ["小亮",60,100,70,230],
        ['醉了',80,50,60,190],
        ['自习室',90,60,80,230],
        ['放屁',50,100,90,240]
    ]
};

var tableContainer = document.getElementById("table-container");
var table1 = new CreateTable(config,tableContainer);

table1.init();