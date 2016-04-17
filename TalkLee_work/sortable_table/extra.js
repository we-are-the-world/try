/**
 * Created by mx on 16-4-13.
 */


//获取表头名数组
function getKey(ConfigItems) {
    var itemsArr = [];
    for(var key in ConfigItems)
    {
        itemsArr.push(key);
    }
    return itemsArr;
}

function addEvent(ele,type,func){
    if(ele.addEventListener){
        ele.addEventListener(type,func);
    }else if(ele.attachEvent){
        ele.attachEvent("on" + type , func)
    }else
    {
        ele["on" + type] = func;
    }
}


