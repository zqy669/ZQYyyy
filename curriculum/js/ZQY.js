//自动执行函数
(function(){
    "use strict";//严格模式
    //命名空间
    if(!window.zqy){
        window.zqy = {};
    }
    //用ID查找的方式获取DOM对象
    function GetEleId(id){
        const dom = document.getElementById(id)
        if(typeof id != 'string'){
            alert("成立");
            throw new Error("传入ID必须为字符串");  //明确说明错误在哪里
            return false;
        }
        if(!dom){
            throw new Error("传入的ID不存在");
        }
        return dom;
    }
    window.zqy.GetEleId = GetEleId;

    //新建一个DOM对象
    function CratEle(node){
        return document.createElement(node);
    }
    window.zqy.CratEle = CratEle;

    //给DOM对象设置属性
    function SetAttr(node,styles){
        for (let key in styles){
            node.setAttribute(key,styles[key]);
        }
    }
    window.zqy.SetAttr = SetAttr;

})()