function multiplicative(value) {
    for(var i=1;i<value;i++){
        for(var j=1;j<i;j++){
            document.write(j+"*"+i+"="+i*j+"&nbsp;&nbsp");
        }
        document.write("<br>");
    }
} //乘法表
function form(index,value){
    document.write("<table border=1 cellspacing=0>");
    for(var i=1;i<=index;i++){
//        if(i%2==0){
//       document.write("<tr bgcolor=green>");
////        } else{
        document.write("<tr>");
//        }
        for(var j=1;j<=value;j++){
//                if(j%2==0){
//                   document.write("<td bgcolor=pink>"+i+"-"+j+"</td>")
//                }else{
//                    document.write("<td>"+i+"-"+j+"</td>")
//                }
            document.write("<td>"+i+"-"+j+"</td>")
        }
        document.write("</tr>");
    }
    document.write("</table>");
}      //表格
function ergodic(Array){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            console.log(arr[i][j])
        }
    }
}         //遍历二维数组
function back(Array) {
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i]=="number"){
            newarr[newarr.length]=arr[i];
        }
    }
    console.log(newarr);
}           //去空
function result(index) {
    var sum=0;
    for(var i=1;i<=index;i++){
        if(i%2==0){
            sum=sum+i;
        }
    }
    console.log(sum);
}         //求和
function output(index) {
    for(var i=1;i<=index;i++){
        document.write(i+"<br>")
    }
}         //输出
function triangle(row) {
    for(var i=1;i<=row;i++){
        for(var j=1;j<=row-i;j++){
            document.write("&nbsp");
        }
        for(var c=1;c<=2*i-1;c++){
            document.write("*")
        }
        document.write("<br>")
    }
}         //金字塔
function fn(max) {
    var i=1,j=1;
    for(var k=0;k<=max;){
        k=i+j;
        document.write(k+"&nbsp;");
        i=j;
        j=k;
    }
}               //斐波那契数列
function sortUp(arr1) {
    for(var i=0;i<arr1.length;i++){
        for(var j=i+1;j<arr1.length;j++){
            if(arr1[i]<arr1[j]){
                var temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
        }
    }
    console.log(arr);
}          //数组从大到小排序
function sortDown(arr1) {
    for(var i=0;i<arr1.length;i++){
        for(var j=i+1;j<arr1.length;j++){
            if(arr1[i]>arr1[j]){
                var temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
        }
    }
    console.log(arr);
}        //数组从大到小排序
function sort(arr,type) {
    if(type==undefined){
        type =="<";//type=type==undefined?'<':type
    }
    if(type=="<"){
        sortUp(arr)
    }else if(type==">"){
        sortDown(arr)
    }
}        //数组大小排序
function push(arr) {
    for(var i=1;i<arguments.length;i++){
        arr[arr.length]=arguments[i];
    }
    console.log(arr);
}             //在数组后增加任意元素
function tostring(arr,str){
    var a="";
    for(var i=0;i<arr.length;i++){
        if(i<arr.length-1){
            a+=arr[i]+str;
        }
        else{
            a+=arr[i]
        }
    }
    console.log(a);
//        return a;

}      //数组转换为字符串
function filter(arr) {
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            newarr[newarr.length]=arr[i];
        }
    }
    return newarr;
}           //筛选偶数
function rest(arr,...value) {                             
    for(var i=0;i<value.length;i++){
        arr[arr.length]=value[i]
    }
    console.log(arr);
}    //剩余参数
function indexof(arr,value){
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]==value){
            return i;
        }
    }
    return -1;
}      //判断一个数在数组里首次出先的位置
function lastindexof(arr,value){
    for (var i =arr.length-1;i>=0; i--) {
        if(arr[i]==value){
            return i;
        }
    }
    return -1;
}   //判断某一个输在一个数组里面最后一次出现的位置
function splice(arr,pos,num) {
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        if(i>=pos&&i<pos+num){
            continue;
        }
        newarr[newarr.length]=arr[i];
    }
    return newarr;
}       //万能的删除
function spliceAdd(arr,pos,...rest) {
    for(var i=0;i<pos;i++){
        newarr[newarr.length]=arr[i];
    }
    for(var i=0;i<rest.length;i++){
        newarr[newarr.length]=rest[i];
    }
    for(var i=pos;i<arr.length;i++){
        newarr[newarr.length]=arr[i];
    }
    return newarr;
}//万能的添加
function reverse(arr) {
    for(var i=arr.length-1;i>=0;i--){
//            newarr[newarr.length]=arr[i];
        push(newarr,arr[i]);     //调用push函数实现数组反转
    }
    return newarr;
}    function push(arr,...rest){
    for(var i=0;i<rest.length;i++){
        arr[arr.length]=rest[i];
    }
}            //数组的反转
function addsplice(arr,pos,num,...rest) {
    var newarr=splice(arr,pos,num);
    if(rest.length>0){
        newarr=spliceAdd(newarr,pos,...rest);
    }
    return newarr;
}//在数组的任意位置添加或删除
function map(arr,fn){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        newarr[newarr.length]=fn(arr[i]);
    }
    return newarr;
}               //映射
var result=map(arr,function(value){
    return value+2
});
console.log(result);
function filter(arr,fn) {
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        if(fn(arr[i])){
            newarr[newarr.length]=arr[i];
        }
    }
    return newarr;
}            //过滤
 var result=filter(arr,function(value){
    return value>0;
})
 console.log(result);
function some(arr,fn) {
    for(var i=0;i<arr.length;i++){
        if(fn(arr[i])){
            return true;
        }
    }
    return false;
}             //判断数组里某个元素是否符合条件
var result=some(arr,function(value){
    return value>0;
})
console.log(result)
function every(arr,fn) {
    for(var i=0;i<arr.length;i++){
        if(!fn(arr[i])){
            return false;
        }
    }
    return true;
}           //判断数组里所有元素是否符合条件
var result=every(arr,function(value){
    return value>0;
})
console.log(result)
function copy(arr) {
    var newarr=[];
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i]=="object"){
            newarr[i]=copy(arr[i]);
        }else{
            newarr[i]=arr[i];
        }
}
    return newarr;
}               //数组的拷贝