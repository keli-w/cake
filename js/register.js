var ipts=document.querySelectorAll("input");
var spans=document.querySelectorAll("span");
var user1,password1,password2,birthday,phone1;
//console.log(ipts,spans)
/************ 账户验证***********/
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
function checkPwd1(){
    var reg=/^[a-zA-Z]\w{5,17}$/
    var pwd1=ipts[1].value;
    if(reg.test(pwd1)){
        spans[1].innerHTML="√";
        spans[1].style.color = '#08C63E'
        return password1=true;
    }else{
        spans[1].innerHTML="以字母开头，长度在6-18之间， 只能包含字符、数字和下划线";
        spans[1].style.color="red";
        return password1=false;
    }
}



/************ 密码确认验证***********/
function checkPwd2(){
    var pwd1=ipts[1].value;
    var pwd2=ipts[2].value;
    if(pwd1==pwd2&&pwd2!=""){
        spans[2].innerHTML="√";
        spans[2].style.color = '#08C63E'
        return password2=true;
    }else{
        spans[2].innerHTML="两次输入密码不一致，重新输入";
        spans[2].style.color="red";
        return password2=false;
    }
}




/************ 生日验证***********/
function checkBirth(){
    var reg=/^(19|20)\d{2}-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/
    var birth=ipts[3].value;
    if(reg.test(birth)){
        spans[3].innerHTML="√";
        spans[3].style.color = '#08C63E'
        return birthday=true;
    }else{
        spans[3].innerHTML="请以1995-08-20格式书写";
        spans[3].style.color="red";
        return birthday=false;
    }
}



/************ 电话号验证***********/
function checkPhone(){
    var reg=/^[1]([3-9])[0-9]{9}$/
    var phone=ipts[4].value;
    if(reg.test(phone)){
        spans[4].innerHTML="√";
        spans[4].style.color = '#08C63E'
        return phone1=true;
    }else{
        spans[4].innerHTML="输入错误，请重新输入";
        spans[4].style.color="red";
        return phone1=false;
    }
}
/************ 全部验证***********/
function checkAll(){
    if(user1&&password1&&password2&&birthday&&phone1){
        console.log(111)
        return true;
    }else{
        checkUser();
        checkPwd1();
        checkPwd2();
        checkBirth();
        checkPhone();
        return false;
        console.log(222)
    }
}


