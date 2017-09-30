/*
* @Author: admin
* @Date:   2017-09-18 17:25:25
* @Last Modified by:   admin
* @Last Modified time: 2017-09-27 13:24:19
*/
window.onload =function(){

//////////////////////////////////////
//头部
	let last2=document.getElementsByClassName('last2')[0];
	let gouwuc=document.getElementsByClassName('gouwuc')[0];

	last2.onmouseover=function(){
		gouwuc.style.display='block';
	 
	}
	last2.onmouseout=function(){
		gouwuc.style.display='none';
		 
	}

//上导航
	let dao=$('.dao')[0];
	 
	let lii = dao.children;
	 
	let boxz = $('.boxz');
	for(let i=0;i<lii.length-2;i++){
		lii[i].onmouseover = function(){
			boxz[i].style.display = 'block';
		}
		lii[i].onmouseout = function(){
			boxz[i].style.display = 'none';
		}

	}

//  aside导航
	// let ceban =document.getElementsByClassName('ceban')[0];
	let asideleft=$('.aside-left')[0];
 
	let lis = $('.fir',asideleft);
	let item = $('.item');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			item[i].style.display = 'none';
		}

	}




// banner 

let tu=$('.tu')[0];
let tuu =$('li',tu);

let yuan =$('.yuan')[0];
let liss = $('li',yuan);
let banner=$('.banner')[0];
///////////////////////////
  
///////////////////////////
 	let m;
	m =setInterval(fn, 3000);
	banner.onmouseover=function (){
		clearInterval(m);
	}
	banner.onmouseout =function(){
		m =setInterval(fn, 3000);
	}
////////////////////////////
//zuoyou
let bannerl = $('.banner-left')[0];
let bannerr = $('.banner-right')[0];
 
 let wih =parseInt(getComputedStyle(tu,null).width);
 let flag=true;
	bannerr.onclick=function(){
		if(!flag){
			return;
		}fn();
		flag=false;
	}
	bannerl.onclick=function(){
		if(!flag){
			return;
			
		}fn1();
		flag=false;
	}
 
//自动
	let now=0;
	let next=0;
		function fn(){
			next++;
			if(next == tuu.length){
				next=0;
			}

 			liss[now].style.background='#16161c';
 			liss[next].style.background='#7c7c81';
 			tuu[next].style.left=wih+'px';
 			animate(tuu[now],{left:-wih});
 			animate(tuu[next],{left:0},function(){
 				flag = true;
 			});
 			
 			now = next;
		}
 		function fn1(){
			next--;
			if(next == -1){
				next=tuu.length-1;
			}
			liss[now].style.background='#16161c';
			liss[next].style.background = '#7c7c81';
			tuu[next].style.left=`${-wih}px`;
 			animate(tuu[now],{left:wih});
 			animate(tuu[next],{left:0},function(){
 				flag = true;
 			});
			now = next;
		}
// banner点击
for(let i=0;i<liss.length;i++){
	liss[i].onclick=function(){
		if(now == i){return;}
 			liss[now].style.background='#16161c';
			liss[i].style.background = '#7c7c81';
			
			tuu[i].style.left= wih+'px';
			animate(tuu[now],{left:-wih});
			animate(tuu[i],{left:0});
			now = next = i;
		
	}
}

 //小米明星单品
 let danpin1=document.getElementsByClassName('danpin1')[0];
 let anniuL = document.getElementsByClassName('anniu-left')[0];
 let anniuR = document.getElementsByClassName('anniu')[0];
anniuR.onclick=function(){
	danpin1.style.marginLeft=-1236+'px'; 
		anniuL.className='anniu';
		anniuR.className='anniu-left';	
}
anniuL.onclick=function(){
	danpin1.style.marginLeft=23+'px';
		anniuR.className='anniu';
		anniuL.className='anniu-left';
}


// 家电
let jiaright = document.getElementsByClassName('jia-right');
 
let jiadian= document.getElementsByClassName('jiadian')[0];
let jiadian1=jiadian.getElementsByTagName('a');
 

let biao21=$('.biao2-left1')[0];
let biao22=$('.biao2-left2')[0];
let biao23=$('.biao2-left3')[0];
let biao24=$('.biao2-left4')[0];
 
biao21.onmouseover=function(){
	for(let i=0;i<=3;i++){
		jiaright[i].style.display='none';
		jiadian1[i].style.borderBottom='2px solid #F5F5F5';
		jiadian1[i].style.color='#424242'; 
	}
	jiaright[0].style.display='block';
	jiadian1[3].style.borderBottom='2px solid #FF6710';
	jiadian1[3].style.color='#FF6710'; 
}
biao22.onmouseover=function(){
	for(let i=0;i<=3;i++){
		jiaright[i].style.display='none';
		jiadian1[i].style.borderBottom='2px solid #F5F5F5';
		jiadian1[i].style.color='#424242'; 
	}
	jiaright[1].style.display='block';
	jiadian1[2].style.borderBottom='2px solid #FF6710';
	jiadian1[2].style.color='#FF6710'; 

}
biao23.onmouseover=function(){
	for(let i=0;i<=3;i++){
		jiaright[i].style.display='none';
		jiadian1[i].style.borderBottom='2px solid #F5F5F5';
		jiadian1[i].style.color='#424242'; 
	}
	jiaright[2].style.display='block';
	jiadian1[1].style.borderBottom='2px solid #FF6710';
	jiadian1[1].style.color='#FF6710'; 

}
biao24.onmouseover=function(){
	for(let i=0;i<=3;i++){
		jiaright[i].style.display='none';
		jiadian1[i].style.borderBottom='2px solid #F5F5F5';
		jiadian1[i].style.color='#424242'; 
	}
	jiaright[3].style.display='block';
	jiadian1[0].style.borderBottom='2px solid #FF6710';
	jiadian1[0].style.color='#FF6710'; 

}
//智能
let zhineng =document.querySelector('.zhineng');
let asa = zhineng.querySelectorAll('.zhineng>a');
 
let biao3left5 = document.querySelector('.biao3-left5');
let biao3left4 = document.querySelector('.biao3-left4');
let biao3left3 = document.querySelector('.biao3-left3');
let biao3left2 = document.querySelector('.biao3-left2');
let biao3left1 = document.querySelector('.biao3-left1');
 
 let zhiright=document.querySelectorAll('.zhi-right');
 
biao3left5.onmouseover=function(){omove(4,0,4,asa);}
biao3left4.onmouseover=function(){omove(3,0,4,asa);}
biao3left3.onmouseover=function(){omove(2,0,4,asa);}
biao3left2.onmouseover=function(){omove(1,0,4,asa);}
biao3left1.onmouseover=function(){omove(0,0,4,asa);}

//搭配
let zhin2 =document.getElementsByClassName('zhineng')[1];
let asa2 = zhin2.getElementsByTagName('a');
let biao3le5 = document.getElementsByClassName('biao3-left5')[1];
let biao3le4 = document.getElementsByClassName('biao3-left4')[1];
let biao3le3 = document.getElementsByClassName('biao3-left3')[1];
let biao3le2 = document.getElementsByClassName('biao3-left2')[1];
let biao3le1 = document.getElementsByClassName('biao3-left1')[1];
biao3le5.onmouseover=function(){omove(0,5,9,asa2);}
biao3le4.onmouseover=function(){omove(1,5,9,asa2);}
biao3le3.onmouseover=function(){omove(2,5,9,asa2);}
biao3le2.onmouseover=function(){omove(3,5,9,asa2);}
biao3le1.onmouseover=function(){omove(4,5,9,asa2);}

//配件
let zhin3 =document.getElementsByClassName('zhineng')[2];
let asa3 = zhin3.getElementsByTagName('a');
let biao3lef5 = document.getElementsByClassName('biao3-left5')[2];
let biao3lef4 = document.getElementsByClassName('biao3-left4')[2];
let biao3lef3 = document.getElementsByClassName('biao3-left3')[2];
let biao3lef2 = document.getElementsByClassName('biao3-left2')[2];
let biao3lef1 = document.getElementsByClassName('biao3-left1')[2];
 console.log(biao3lef5)
biao3lef5.onmouseover=function(){omove(0,10,14,asa3);}
biao3lef4.onmouseover=function(){omove(1,10,14,asa3);}
biao3lef3.onmouseover=function(){omove(2,10,14,asa3);}
biao3lef2.onmouseover=function(){omove(3,10,14,asa3);}
biao3lef1.onmouseover=function(){omove(4,10,14,asa3);}

 //周边
let zhin4 =document.getElementsByClassName('zhineng')[3];
let asa4 = zhin4.getElementsByTagName('a');
let biao3leff5 = document.getElementsByClassName('biao3-left5')[3];
let biao3leff4 = document.getElementsByClassName('biao3-left4')[3];
let biao3leff3 = document.getElementsByClassName('biao3-left3')[3];
let biao3leff2 = document.getElementsByClassName('biao3-left2')[3];
let biao3leff1 = document.getElementsByClassName('biao3-left1')[3];
biao3leff5.onmouseover=function(){omove(0,15,19,asa4);}
biao3leff4.onmouseover=function(){omove(1,15,19,asa4);}
biao3leff3.onmouseover=function(){omove(2,15,19,asa4);}
biao3leff2.onmouseover=function(){omove(3,15,19,asa4);}
biao3leff1.onmouseover=function(){omove(4,15,19,asa4);}
function omove(num,start,end,asb){
 	for(let i=start;i<=end;i++){
		zhiright[i].style.display='none'; 
	}	
	for(let i=0;i<=4;i++){ 	
		asb[i].style.borderBottom='2px solid #F5F5F5';
		asb[i].style.color='#424242'; 
	}
	if(start>=0 && end<=4){
		zhiright[num].style.display='block';
		asb[4-num].style.borderBottom='2px solid #FF6710';
		asb[4-num].style.color='#FF6710'; 
	}
	if(start>=5 && end<=9){
		zhiright[9-num].style.display='block';
		asb[num].style.borderBottom='2px solid #FF6710';
		asb[num].style.color='#FF6710'; 
	}
	if(start>=10 && end<=14){
		zhiright[14-num].style.display='block';
		asb[num].style.borderBottom='2px solid #FF6710';
		asb[num].style.color='#FF6710'; 
	}
	if(start>=15 && end<=19){
		zhiright[19-num].style.display='block';
		asb[num].style.borderBottom='2px solid #FF6710';
		asb[num].style.color='#FF6710'; 
	}
 }




// 为你推荐

let tuijian1=$('.tuijian1')[0]; 
let anL = document.getElementsByClassName('anzuo')[0];
let anR = document.getElementsByClassName('anyou')[0]; 
anR.onclick=function(){
	tuijian1.style.marginLeft=-1256+'px'; 
		anL.className='anyou';
		anR.className='anzuo';	
}
anL.onclick=function(){
	tuijian1.style.marginLeft=0+'px';
		anR.className='anyou';
		anL.className='anzuo';
}

// 内容
	//第一
let tw6 = document.querySelector('.tw6');
let dis = tw6.querySelectorAll('div');

 
let she = document.querySelector('.s-he') 
let leftsmall = document.querySelectorAll('.left-1-leftsmall');
let rightsmall = document.querySelectorAll('.left-1-rightsmall')
	
let n=0; 
		dis[0].onclick=function(){yuandian(dis,0,she); n=0;}
		dis[1].onclick=function(){yuandian(dis,1,she); n=1;}
		dis[2].onclick=function(){yuandian(dis,2,she); n=2;} 
		function yuandian(who,index,res){
				res.style.marginLeft=-296*index+'px'; 
				for(let i=0;i<=2;i++){
					who[i].className='yuan3';
				}
				who[index].className='yuan1'; 
		}
		rightsmall[0].onclick=function (){ 
		 if(n==2){
		 	return;
		 }
			n++;	
			she.style.marginLeft=-296*n+'px';
			for(let i=0;i<3;i++){
		 		dis[i].className='yuan2'; 
			}
		 	dis[n].className='yuan1';
		} 
		leftsmall[0].onclick=function (){
		  if(n==0){
		 	return;
		 }
		 	n--;
			she.style.marginLeft=-296*n+'px'; 
			for(let i=0;i<3;i++){
		 		dis[i].className='yuan2'; 
			}
		 	dis[n].className='yuan1';
		}
 
	//第二
let neirong1= document.querySelector('.neirong1');
let left2 = neirong1.querySelector('.left-2')
let tw66 = left2.querySelector('.tw6');
let diss = tw66.querySelectorAll('div'); 
let shee = document.querySelectorAll('div.s-he')[1]; 
 
	diss[0].onclick=function(){yuandian(diss,0,shee); n=0;}
	diss[1].onclick=function(){yuandian(diss,1,shee); n=1;}
	diss[2].onclick=function(){yuandian(diss,2,shee); n=2;}
	rightsmall[1].onclick=function (){ 
	 if(n==2){
	 	return;
	 }
		n++;	
		shee.style.marginLeft=-296*n+'px';
		for(let i=0;i<3;i++){
	 		diss[i].className='yuan2'; 
		}
	 	diss[n].className='yuan1';
	} 
	leftsmall[1].onclick=function (){
	  if(n==0){
	 	return;
	 }
	 	n--;
		shee.style.marginLeft=-296*n+'px'; 
		for(let i=0;i<3;i++){
	 		diss[i].className='yuan2'; 
		}
	 	diss[n].className='yuan1';
	}

	//第三
// let neirong1= document.querySelector('.neirong1');
let right2 = neirong1.querySelector('.right-2')
let tw63 = right2.querySelector('.tw6');
let dis3 = tw63.querySelectorAll('div'); 
let she3 = document.querySelectorAll('div.s-he')[2]; 
 
	dis3[0].onclick=function(){yuandian(dis3,0,she3); n=0;}
	dis3[1].onclick=function(){yuandian(dis3,1,she3); n=1;}
	dis3[2].onclick=function(){yuandian(dis3,2,she3); n=2;}
	rightsmall[2].onclick=function (){ 
	 if(n==2){
	 	return;
	 }
		n++;	
		she3.style.marginLeft=-296*n+'px';
		for(let i=0;i<3;i++){
	 		dis3[i].className='yuan2'; 
		}
	 	dis3[n].className='yuan1';
	} 
	leftsmall[2].onclick=function (){
	  if(n==0){
	 	return;
	 }
	 	n--;
		she3.style.marginLeft=-296*n+'px'; 
		for(let i=0;i<3;i++){
	 		dis3[i].className='yuan2'; 
		}
	 	dis3[n].className='yuan1';
	}
		//第四
 
let right1 = neirong1.querySelector('.right-1')
let tw64 = right1.querySelector('.tw6');
let dis4 = tw64.querySelectorAll('div'); 
let she4 = document.querySelectorAll('div.s-he')[3]; 
 
	dis4[0].onclick=function(){yuandian(dis4,0,she4); n=0;}
	dis4[1].onclick=function(){yuandian(dis4,1,she4); n=1;}
	dis4[2].onclick=function(){yuandian(dis4,2,she4); n=2;}
	rightsmall[3].onclick=function (){ 
	 if(n==2){
	 	return;
	 }
		n++;	
		she4.style.marginLeft=-296*n+'px';
		for(let i=0;i<3;i++){
	 		dis4[i].className='yuan2'; 
		}
	 	dis4[n].className='yuan1';
	} 
	leftsmall[3].onclick=function (){
	  if(n==0){
	 	return;
	 }
	 	n--;
		she4.style.marginLeft=-296*n+'px'; 
		for(let i=0;i<3;i++){
	 		dis4[i].className='yuan2'; 
		}
	 	dis4[n].className='yuan1';
	}
}