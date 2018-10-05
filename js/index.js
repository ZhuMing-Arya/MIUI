// 标签切换显示
var tabs=document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
// 商品切换显示
var lists=document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=showlist;
}

function showlist(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]===this){
            tabs[i].className="active";
            lists[i].className="clearfix active";
        }
        else{
            tabs[i].className="";
            lists[i].className="clearfix";
        }
    }
}


// 监听浏览器本身的滚动事件
var seckillNav=document.getElementById("seckillNav");
window.onscroll=function(){
    // 后两种ie与safari
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset||0;
    console.log(scrollTop);
    if(scrollTop>=260){
        seckillNav.className="seckill-nav seckill-navfixed"
    }
    else{
        seckillNav.className="seckill-nav"
    }
}