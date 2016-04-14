/**
 * Created by MaxWell on 2016/4/12.
 */

//生成表
function CreateTable(config,container){
    this.config = config;
    this.container = container;
}


function renderTbody(tbody){
    var itemsArr = getKey(this.config.items);
    for(var i = 0 , row_len = this.config.Infor_arr.length; i < row_len ; i++) //行循环
    {
        var tr = document.createElement("tr");
        for(var j = 0 , col_len = itemsArr.length ; j < col_len ; j++ ) //列循环
        {
            var td = document.createElement("td");
            td.innerText = this.config.Infor_arr[i][j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}




CreateTable.prototype = {
    constructor : CreateTable,
    sortTimes:0,
    init : function (config,container) {
        //生成 table
        var table = document.createElement("table");
        var header_tr = document.createElement("tr");        //生成表头行






        header_tr.config = this.config; //将config信息传递给触发事件的元素，方便点击时获取config信息






        table.appendChild(header_tr);
        
        var itemsArr = getKey(this.config.items); //表头名数组
        
        for(var i = 0 ; i < itemsArr.length ; i++){
            var th = document.createElement("th");
            th.innerText = itemsArr[i];
            th.style.cursor = "pointer";
            header_tr.appendChild(th);
            header_tr.style.backgroundColor = '#ccc'; //添加样式
        }

        var tbody = document.createElement("tbody"); //生成tbody


        renderTbody(tbody);

        table.appendChild(tbody);

        this.container.appendChild(table);
        table.style.border="1px solid #DDD";





        //参数：待排序元素下标，待排序数组
        function sortForInfor_arr(index,ConfigInfor_arr,event){
            //获取待排序元素数组
            var tr_arr = tbody.getElementsByTagName("tr");
            tbody.innerHTML = ""; //清除表格所有行
            //排序配置文件中数组
            if(event.target.className == "sorted"){
                this.config.Infor_arr.reverse();
                renderTbody(tbody);
            }
            else {
                for (var i = 1, len = this.config.Infor_arr.length; i < len; i++) {
                    var temp = this.config.Infor_arr[i];
                    for (var j = i - 1; j >= 0 && this.config.Infor_arr[j][index] > temp[index]; j--) {
                        this.config.Infor_arr[j + 1] = this.config.Infor_arr[j];
                    }
                    this.config.Infor_arr[j + 1] = temp;   //j+1 ，因为 j 跳出循环是有可能为-1
                }
                console.log(this.config.Infor_arr);
                event.target.className = "sorted";
                //重新渲染
                renderTbody(tbody);
            }
            console.log(this.config.Infor_arr);

        }





        //事件委托


        addEvent(header_tr,"click",function(event){
            var itemsArr = getKey(this.config.items);

            if(this.config.items[event.target.innerText] === true){

            for(var i = 0 ; i < itemsArr.length ; i++ ){
                if(event.target.innerText === itemsArr[i]){
                    break;
                }

            }

            sortForInfor_arr(i,this.config.Infor_arr,event);

            }else{
                alert("can't sort!");
            }

    });



}

}