window.onload=function() {
    let nav = document.querySelector('nav');
    let navimg = document.querySelector('.nav-img');
    let lunboli = navimg.querySelectorAll('li');
    let navdian = document.querySelector('.nav-dian');
    let dianli = navdian.querySelectorAll('li');
    let navleft = document.querySelector('.nav-left');
    let navright = document.querySelector('.nav-right');
    let now=0;
    let next=0;
    let t=setInterval(move,3000);
    let flag=true;
    let imgW=parseInt(window.getComputedStyle(nav,null).width);
    let headxh1=document.querySelector('.headxh1');
    let headxh2=document.querySelector('.headxh2');
    let headxh3=document.querySelector('.headxh3');
    let kecheng=document.querySelector('.kecheng');
    let about=document.querySelector('.about');
    let zhishi=document.querySelector('.zhishi');
    let mainbottom=document.querySelector('.main-bottom');
    let mainli=mainbottom.querySelectorAll('li');
    let mainliw=mainbottom.querySelector('li').offsetWidth;
    let maindianli=document.querySelector('.main-dian>li');
    let mainleft=document.querySelector('.main-left');
    let mainright=document.querySelector('.main-right');

    // 头部选项卡///////////////////////////////////////////////////////////////////////////////////////////////////////
    kecheng.onmouseover=function(){
        headxh1.style.display='block';
    };
    kecheng.onmouseout=function(){
        headxh1.style.display='none';
    };
    about.onmouseover=function(){
        headxh2.style.display='block';
    };
    about.onmouseout=function(){
        headxh2.style.display='none';
    };
    zhishi.onmouseover=function(){
        headxh3.style.display='block';
    };
    zhishi.onmouseout=function(){
        headxh3.style.display='none';
    };

////自动左划轮播事件////////////////////////////////////////////////////////////////////////////////////////////////////
    function move(){
        next++;
        if (next == lunboli.length) {
            next=0;
        }
        dianli[now].style.background='#818181';
        dianli[next].style.background='#7DC01D';
        lunboli[next].style.left=`${-imgW}px`;
        animate(lunboli[now],{left:imgW});
        animate(lunboli[next],{left:0},function(){
            flag=true
        });
        now=next;
    }
// ////鼠标移入事件////////////////////////////////////////////////////////////////////////////////
    nav.onmouseover=function(){
        clearInterval(t);
    };
////鼠标移出事件////////////////////////////////////////////////////////////////////////////////
    nav.onmouseout=function(){
        t=setInterval(move,3000);
    };
////逆轮播右划事件//////////////////////////////////////////////////////////////////////////////
    function moveL(){
        next--;
        if(next<0){
            next=lunboli.length-1;
        }
        dianli[now].style.background='#818181';
        dianli[next].style.background='#7DC01D';
        lunboli[next].style.left= `${imgW}px`;
        animate(lunboli[now],{left:-imgW});
        animate(lunboli[next],{left:0},function(){
            flag=true
        });
        now=next;
    }
    for (let i = 0; i < dianli.length; i++) {
////点击   点事件///////////////////////////////////////////////////////////////////////////////
        dianli[i].onclick=function(){
            if(now == i){return;}
            dianli[now].style.background='#818181';
            dianli[i].style.background='#7DC01D';
            lunboli[i].style.left=-imgW+'px';
            animate(lunboli[now],{left:imgW});
            animate(lunboli[i],{left:0});
            now=next=i
        }
    }
/////点击左键事件///////////////////////////////////////////////////////////////////////////////
   navright.onclick=function(){
        if(!flag){
            return;
        }
        moveL();
        flag=false;
    };
////点击右键事件////////////////////////////////////////////////////////////////////////////////
    navleft.onclick=function(){
        if(!flag){
            return;
        }
        move();
        flag=false;
    }

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 精英教练轮播
