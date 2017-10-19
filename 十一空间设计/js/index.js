//下拉
let lis=document.querySelectorAll('.nve>li');
let divs=document.querySelectorAll('.xiala');
for(let i=0;i<divs.length;i++) {
    let hes = parseInt(getComputedStyle(divs[i], null).height);
    divs[i].setAttribute('a', hes);
    console.log(hes)
    divs[i].style.height = 0;
}
for(let j=0;j<2;j++){
    lis[j].onmouseover=function(){
        let h=divs[j].getAttribute('a');
        divs[j].style.height=h+'px';
    }
    lis[j].onmouseout=function(){
        divs[j].style.height=0;
    }
}

//banner图
let main=document.querySelector('.banner-box');
let ban=document.querySelectorAll('.banner-ul>li');
let banul=document.querySelector('.banner-ul');
let banw=parseInt( getComputedStyle(banul,null).width);
let lefts=document.querySelector('.banner-left');
let rights=document.querySelector('.banner-right');
let t=setInterval(move,2000)
let now=0;
let next=0;
main.onmousemove=function(){
    clearInterval(t)
}
main.onmouseout=function(){
    t=setInterval(move,2000)
}
lefts.onclick=function(){
    move()
}
rights.onclick=function(){
    moveL()
}
function move(){
    next++;
    if(next>ban.length-1){
        next=0
    }
    ban[next].style.left=`${banw}px`;
    animate(ban[now],{left:-banw});
    animate(ban[next],{left:0});
    now=next;
}
function moveL(){
    next--;
    if(next<0){
        next=ban.length-1;
    }
    ban[next].style.left=`${-banw}px`;
    animate(ban[now],{left:banw});
    animate(ban[next],{left:0});
    now=next;
}
