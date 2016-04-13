/**
 * Created by MaxWell on 2016/4/11.
 */


/*
class= "float_layer" 作为触发浮出层出现的DOM元素
*/

/*
* 重要问题：三栏等宽，宽度未知，如何居中
*
* */


function FloatLayer(config,target){
        this.config = config;  //保存配置对象为浮出层的config属性
        this.target = target ;  //保存触发弹出浮出层的事件对象
    }


function getItemOfStyle(item,obj){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[item];
    }else{
        return obj.currentStyle[item];
    }
}




    function addEvent(ele,type,func){
    	if(ele.addEventListener){
            ele.addEventListener(type,func,false); //同步
        }else if(ele.attachEvent){
        	ele.attachEvent("on" + type,func)
        }else{
        	ele["on" + type] = func;
        }
    }







    FloatLayer.prototype = {

        //初始化浮出层
        init : function(){
            //设置遮罩层
            var body = document.getElementsByTagName("body")[0];
            var mask = document.createElement("div");
            //样式设置
            mask.style.position = "absolute";
            mask.style.filter = "alpha(opacity= 60)";
            mask.style.top = 0;
            mask.style.left = 0;
            mask.style.backgroundColor = "#555";
            mask.style.opacity = 0.6;
            //遮罩层宽高 == body宽高
            mask.style.width  = body.clientWidth + "px";
            mask.style.height  = body.clientHeight + "px";
            body.appendChild(mask);


            //添加浮出层到表面
            var float_layer = document.createElement("div");
            float_layer.style.position = "fixed";
            //设置浮出层样式，除了宽高
            float_layer.style.backgroundColor ="#FFF";
            //添加topnav
            var topnav = document.createElement("div");
            topnav.innerText = this.config.topnav.content;
            topnav.style.padding = "10px 40px";
            topnav.style.textAlign = "center";
            float_layer.appendChild(topnav);








            //设置main
            var  main = document.createElement("div");
            main.innerText = this.config.main.content;
            main.style.margin = " 10px 20px";
            main.style.padding = '10px';
            main.style.borderTop = "1px solid #CCC";
            float_layer.appendChild(main);

            //设置footer


            var footer = document.createElement("div");
            footer.style.height = this.config.footer.height;
            footer.style.width = this.config.footer.width;

            footer.style.float="right";

            var yes_btn = document.createElement("input");
            yes_btn.type="button";
            yes_btn.value = "确定";
            var no_btn = document.createElement("input");
            no_btn.type="button";
            yes_btn.style.width = "40%";
            no_btn.style.width = "40%";
            yes_btn.marginRight = "10px";
            no_btn.marginRight = "10px";
            yes_btn.style.height = "90%";
            no_btn.style.height = "90%";
            footer.style.display="flex";
            footer.style.justifyContent = "space-around";

            no_btn.value = "取消";
            footer.appendChild(yes_btn);
            footer.appendChild(no_btn);

            addEvent(yes_btn,"click",close_float_layer);
            addEvent(no_btn,"click",close_float_layer);




            float_layer.appendChild(footer);








            //最后设置位置





            body.appendChild(float_layer);

            //设置位置

            var float_layer_width = getItemOfStyle("width",float_layer);
            var float_layer_height = getItemOfStyle("height",float_layer);

            var screnn_width =  window.innerWidth;
            var screnn_height =  window.innerHeight;

            console.log(float_layer_height);
            console.log(screnn_height);
            float_layer.style.left = (screnn_width - parseInt(float_layer_width)) / 2  - 10 + "px";
            float_layer.style.top = (screnn_height - parseInt(float_layer_height)) / 2.22   + "px";




            //点击遮罩层外，关闭遮罩层和浮出层
            addEvent(mask,"click",close_float_layer);

            function close_float_layer(){
                body.removeChild(float_layer);
                body.removeChild(mask);
            }
        }
    };






