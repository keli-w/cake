function promiseAjax(obj){
	var ps = new Promise(function(resolved,rejected){
		
		obj.url += "?rand=" + new Date().getTime();
		if(obj.method.toLowerCase() === "get"){
			if(!!obj.data){//传递了data
				obj.url += "&" + serialize(obj.data);
			}
		}
		var xhr = new getXHR();
		xhr.open(obj.method,obj.url);
		if(obj.method.toLowerCase() === "post"){
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(serialize(obj.data));
		}else{
			xhr.send();
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					//obj.success(xhr.responseText);
					resolved(xhr.responseText);
				}else{
					//obj.error("响应出错了，错误提示：" + xhr.status + ";错误原因：" + xhr.statusText);
					rejected("响应出错了，错误提示：" + xhr.status + ";错误原因：" + xhr.statusText);
				}
			}
		}
		
	});
	return ps;
}


function ajax(obj){
	obj.url += "?rand=" + new Date().getTime();
	if(obj.method.toLowerCase() === "get"){
		if(!!obj.data){//传递了data
			obj.url += "&" + serialize(obj.data);
		}
	}
	var xhr = new getXHR();
	xhr.open(obj.method,obj.url);
	if(obj.method.toLowerCase() === "post"){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(serialize(obj.data));
	}else{
		xhr.send();
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				obj.success(xhr.responseText);
			}else{
				obj.error("响应出错了，错误提示：" + xhr.status + ";错误原因：" + xhr.statusText);
			}
		}
	}
}

function getXHR(){
	var xhr = null;
	if(window.XMLHttpRequest){//高版本浏览器
		xhr = new XMLHttpRequest();
	}else{//ie6 ie5
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xhr;
}
//参数序列化
function serialize(obj){
	
	if(!obj) return null;
	
	var arr = [];
	for(var key in obj){
		arr.push(key+"="+obj[key]);
	}
	return arr.join("&");
}
