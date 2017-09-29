//banner开始
{
    const bannerlist = document.querySelectorAll(".banner li");
    const dianlist = document.querySelectorAll(".dianbox li");
    const bannerbox = document.querySelector(".bannerbox");
    const prev=document.querySelector(".prev li");
    const next=document.querySelector(".next");
  
    dianlist.forEach(function (ele, index) {
        ele.onmouseover = function () {
            for (var i = 0; i < dianlist.length; i++) {
                dianlist[i].classList.remove("active");
                bannerlist[i].classList.remove("active");
            }
            dianlist[index].classList.add("active");
            bannerlist[index].classList.add("active");
            
            num = index;
        }
    });
    // prev.onmousemove=function () {
    //     prev.classList.remove("active");
    // }
    // prev.onmouseout=function () {
    //     prev.classList.add("active");
    // }

    let num = 0;
    let move = function () {
        num++;
        if (num == dianlist.length) {
            num = 0;
        }
        if(num==-1){
            num=dianlist.length-1;
        }
        for (var i = 0; i < dianlist.length; i++) {
            dianlist[i].classList.remove("active");
            bannerlist[i].classList.remove("active");
        }
        dianlist[num].classList.add("active");
        bannerlist[num].classList.add("active");
        bannerbox.style.background = colorarr[num];
    }
    let st = setInterval(move, 3000);
    bannerbox.onmouseover = function () {
        clearInterval(st);
    }
    bannerbox.onmouseout = function () {
        st=setInterval(move,3000);
    }
    next.onclick=function () {
        move();
    }
    prev.onclick=function () {
        num=num-2;
        move();
    }
}
//banner结束

//导航开始
 {
    const lis=document.querySelectorAll(".nav-inner-li");
    const secs=document.querySelectorAll(".nav-second");

    const heightarr=[];
    secs.forEach(function (ele) {
        let height=ele.querySelectorAll("li").length*40-35;
        heightarr.push(height);
    })

    lis.forEach(function (ele,index) {
        ele.onmouseover=function () {
            secs[index].style.height=heightarr[index]+"px";
        }
        ele.onmouseout=function () {
            secs[index].style.height="0";
        }
    })
}
//导航结束