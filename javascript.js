var a= document.getElementById('cont');
var b=document.getElementById('block');
var c=document.getElementById('blank');
var d=document.getElementById('chara');
var score= 0;
var jump=0;
c.addEventListener('animationiteration',()=>{
    var rand=-((Math.random()*500)+300);
    c.style.top=rand+"px";//assigning a val
    score++;
}); //method of document-adding events through js
setInterval(function (){
    var ct= parseInt(window.getComputedStyle(d).getPropertyValue("top"));
    if(jump==0)
    {
        d.style.top=(ct+3)+"px";   
    }
    var bl= parseInt(window.getComputedStyle(b).getPropertyValue("left"));
    var bt= parseInt(window.getComputedStyle(c).getPropertyValue("top"));
    var dt=-(640-ct);
    if((ct>560)||((bl<80)&&(bl>-100)&&( (dt<bt)||(dt>bt+250) )))
    {
        alert("Game Over! Score"+(score-1));
        d.style.top=80+"px";
    }
},15);
function onjump(){
    jump=1;
    var jcount=0;
    var jint = setInterval(function (){
        var ct= parseFloat(window.getComputedStyle(d).getPropertyValue("top"));
        if(jcount<40){
            d.style.top=(ct-5)+"px";
        }
        else{
            clearInterval(jint);
            jump=0;
            jcount=0;
        }
        jcount++;
    },15);
}
function calljump(ev){
    if(ev.key==" "){
            onjump();
    }
}

