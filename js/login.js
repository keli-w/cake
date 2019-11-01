var ipts=document.querySelectorAll("input");
var spans=document.querySelectorAll("span");
var user1,pwd1;
function checkUser(){
    var reg=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
    var user=ipts[0].value;
    if(reg.test(user)){
        spans[0].innerHTML="√";
        spans[0].style.color = '#08C63E'
        return user1=true;
    }else{
        spans[0].innerHTML="字母开头，允许5-16字节，允许字母数字下划线";
        spans[0].style.color="red";
        return user1=false;
    }
}




/************ 密码验证***********/
function checkPwd(){
    var reg=/^[a-zA-Z]\w{5,17}$/
    var pwd=ipts[1].value;
    if(reg.test(pwd)){
        spans[1].innerHTML="√";
        spans[1].style.color = '#08C63E'
        return pwd1=true;
    }else{
        spans[1].innerHTML="以字母开头，长度在6-18之间， 只能包含字符、数字和下划线";
        spans[1].style.color="red";
        return pwd1=false;
    }
}

/************ 全部验证***********/
function checkAll(){
    if(user1&&pwd1){
        return true;
    }else{
        checkUser();
        checkPwd();
        return false;
    }
}
/********** 判断cookie是否存在******** */
var cookie=document.cookie;
if(!!cookie){
    window.location.href="../view/home.html";
}
var frm=document.getElementsByName('frm')[0]
frm.onsubmit=function(e){
    var e=e||event;
    e.preventDefault()
    checkAll()
    var ipts=document.querySelectorAll("input");
    var btn=document.querySelector("#btn")
    if(checkAll()==true){
        var user=ipts[0].value;
        var pwd=ipts[1].value
        //console.log(user,pwd)
        ajax({
            url:'../php/login.php',
            method:'get',
            data:{user:user,pwd:pwd},
            success:function(res){
                //console.log(res)
                if(res=='登录成功'){
                    alert('登录成功');
                    window.location.href="../view/home.html";
                    setCookie(user,pwd,1000);
                }else if(res=="用户名不存在"){
                    alert('用户名不存在');
                    window.location.reload();
                }else if(res=="密码输入错误！"){
                    alert('密码输入错误！');
                    window.location.reload();
                }
            }
        })
    }
}
