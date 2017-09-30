/*
* @Author: admin
* @Date:   2017-09-19 17:03:59
* @Last Modified by:   admin
* @Last Modified time: 2017-09-25 16:09:33
*/
 
	function getClass(classname,range){
			range = range ? range:document;
			if(range.getElementsByClassName){
				return range.getElementsByClassName(classname);
			}else{
				var newarr=[];
				var all =range.getElementsByTagName('*');
				for(var i=0;i<all.length;i++){
					if(checkclass(all[i].className,classname))

					{
						newarr.push(all[i]);
					}
				}
				return newarr;			
			}
		}

		function checkclass(a,b){
			var arr= a.split(' ');
			for(var i=0;i<arr.length;i++){
				if(arr[i] == b){
					return true;
				}
			}
			return false;
		}

		function $(select,ranger){
			if(typeof(select) == 'string'){
				ranger= ranger? ranger :document;
				var first= select.charAt(0);
				if(first =='.'){ 
					return getClass(select.substring(1),ranger);
				}else if(first == '#'){
					return document.getElementById(select.substring(1));
				}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
					return ranger.getElementsByTagName(select);
				}
			}else if(typeof(select) == 'function'){
				window.addEventListener('load', select);
			}
		}
 