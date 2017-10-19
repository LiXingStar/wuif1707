window.onload = function(){
	//aside
	let aside = document.getElementsByTagName('aside')[0];
	let lis = aside.getElementsByTagName('li');
	let itemss = aside.getElementsByClassName('itemss');
	let flag = true;
	
	
	
	
	
	
	
	
	for (let i=0;i<lis.length;i++) {
		lis[i].onmouseover = function(){
			itemss[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			itemss[i].style.display = 'none';
		}
	}
	///////////////////////////////
	//btns
	let banner = document.getElementsByTagName('section')[0];
	//console.log(banner);
	let btnlist = banner.getElementsByClassName('btn-list')[0];
	let liss = btnlist.getElementsByTagName('li');
	let image =banner.getElementsByClassName('image1')[0];
	let li1 = image.getElementsByTagName('li');
	//console.log(liss);
	/*for (let i=0;i<liss.length;i++) {
		liss[i].onmouseover = function(){
			for (let j=0;j<li1.length;j++) {
				//li1[j].style.display = 'none';
				//animate(li1[j],{opacity:0});
				animate(li1[j],{left:W});
				liss[j].style.background = 'black';
			}
			//li1[i].style.display = 'block';
			//animate(li1[i],{opacity:1});
			animate(li1[i],{left:0});
			liss[i].style.background = '#665E57';
			num = i;
		}
		
	}*/
	
	//左右滑动的动效
	
	for (let i=0;i<liss.length;i++) {
		liss[i].onclick = function(){
			//now	i
			if (i == now) {
				return ;
			}
			if (i>now) {
			liss[now].style.background = 'black';
			liss[i].style.background = '#665E57';
			li1[i].style.left = W+'px';
			animate(li1[now],{left:-W});
			animate(li1[i],{left:0});
			now = next = i;
			}else if (i<now) {
				liss[now].style.background = 'black';
				liss[i].style.background = '#665E57';
				li1[i].style.left = -W+'px';
				animate(li1[now],{left:W});
				animate(li1[i],{left:0});
				now = next = i;
			}
			
		}
	}
	
	
	
	
	
	
	
	
	
	/////////////////////////////////////
	//轮播动效
	
	/*let t;
	let num = 0;
	t = setInterval(move,3000);*/
	
	//直接出来的动效
	/*function move(){
		num++;
		if (num == li1.length) {
			num = 0;
		}
		for (let i=0;i<li1.length;i++) {
			//li1[i].style.display = 'none';
			animate(li1[i],{opacity:0});
			liss[i].style.background = 'black';
		}
		//li1[num].style.display = 'block';
		animate(li1[num],{opacity:1});
		liss[num].style.background = '#665E57';
	}*/
	
	
	
	/*function move1(){
		num--;
		if (num == -1) {
			num = li1.length-1;
		}
		for (let i=0;i<li1.length;i++) {
			//li1[i].style.display = 'none';
			animate(li1[i],{opacity:0});
			liss[i].style.background = 'black';
		}
		//li1[num].style.display = 'block';
		animate(li1[num],{opacity:1});
		liss[num].style.background = '#665E57';
	}*/
	///////////////////////////////////////////
	//左右滑动的动效
	
	let now = 0;
	let next = 0;
	let W = parseInt(getComputedStyle(li1[0],null).width);
	
	let t = setInterval(move,3000);
	function move(){
		next++;
		if (next == li1.length) {
			next = 0;
		}
		li1[next].style.left = `${W}px`;
		liss[now].style.background = 'black';
		liss[next].style.background = '#665E57';
		animate(li1[now],{left:-W});
		animate(li1[next],{left:0},function(){
			flag = true;
		});
		now = next;

		
	}
	
	
	function move1(){
		next--;
		if (next == -1) {
			next = li1.length-1;
		}
		liss[now].style.background = 'black';
		liss[next].style.background = '#665E57';
		li1[next].style.left = `${-W}px`;
		animate(li1[now],{left:W});
		animate(li1[next],{left:0},function(){
			flag = true;
		});
		now = next;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	///////////////////////////////////////////
	//鼠标移入暂停t
	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		
		t = setInterval(move,3000);
	}
	
	///////////////////////////////////////////
	//左右箭头
	
	let btnl = $('.btn-list')[0];
	let left1 = $('.left1',btnl)[0];
	let right1 = $('.right1',btnl)[0];
	//console.log(left1);
	//console.log(right1);
	left1.onclick = function(){
		if (!flag) {
			return ;
			
		}
		flag = false;
		move1();
		liss[now].style.background = 'black';
		liss[next].style.background = '#665E57';
	}
	
	right1.onclick = function(){
		if (!flag) {
			return;
			
		}
		flag = false;
		move();
		liss[now].style.background = 'black';
		liss[next].style.background = '#665E57';
	}
	
}
