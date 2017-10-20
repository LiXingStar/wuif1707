/*
* @Author: xing
* @Date:   2017-09-25 16:22:17
* @Last Modified by:   xing
* @Last Modified time: 2017-09-25 22:33:46
*/
window.addEventListener('load',function(){
	let big=document.querySelector('.big');
	let small=document.querySelector('.small');
	let bImg=big.querySelector('img');
	let zzh=small.querySelector('.zhezhao');
	let mw=zzh.offsetWidth;
	let mh=zzh.offsetHeight;
	let sw=small.offsetWidth;
	let sh=small.offsetHeight;
	let bw=big.offsetWidth;
	let bh=big.offsetHeight;
	let gaizi=small.querySelector('.opcity');
	small.addEventListener('mousemove',function(e){
		let ox=e.offsetX-mw/2,oy=e.offsetY-mh/2;
			zzh.style.left=ox+'px';
		zzh.style.top=oy+'px';  
	if(ox>=sw-mw){
		zzh.style.left = 150 + 'px';
	}else if(ox <= 0){
		zzh.style.left =0+ 'px';
	}       	
	if(oy>=sh-mh){
		zzh.style.top = 150 + 'px';
	}else if(oy <= 0){
		zzh.style.top = 0 + 'px';
	} 
	let lefts=ox*sw/mw,tops=oy*sh/mh,widths=sw*bw/mw,heights=sh*bh/mh;
		bImg.style.left=`${-lefts}px`;
		bImg.style.top=`${-tops}px`;
		bImg.style.width=`${widths}px`;
		bImg.style.height=`${heights}px`;
	})
	small.addEventListener('mouseover',function(){
		big.style.display='block';
	})
	small.addEventListener('mouseout',function(){
		big.style.display='none';
	})
})