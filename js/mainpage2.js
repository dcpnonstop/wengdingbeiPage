/**
 * Created by DCP on 2017-09-10.
 */

window.onload=function () {
    var oDiv=document.getElementById('div2');
    var oUl=oDiv.getElementsByTagName('ul')[0]
    var oLi=oUl.getElementsByTagName('li')
    var speed=2;
    oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
    oUl.style.width=oLi[0].offsetWidth*oLi.length+'px';
    function move() {
        if(oUl.offsetLeft<-oUl.offsetWidth/2){
            oUl.style.left='0'
        }
        if(oUl.offsetLeft>0){
            oUl.style.left=-oUl.offsetWidth/2+'px'
        }
        oUl.style.left=oUl.offsetLeft+speed+'px'
    }
    var timer=setInterval(move,30);
    oDiv.onmouseover=function () {
        clearInterval(timer)

    }
    oDiv.onmouseout=function () {

        timer=setInterval(move,30);
    }
    document.getElementsByTagName('glyphicon glyphicon-chevron-left').onclick=function () {
        speed=-2;
    }
    document.getElementsByTagName('glyphicon glyphicon-chevron-right').onclick=function () {
        speed=2;
    }


}