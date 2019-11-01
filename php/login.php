<?php
include('base.php');
$user1=$_GET["user"];
$pwd1=$_GET["pwd"];
//echo $pwd1;
//定义从数据库中获取账户密码的sql语句
$sql="SELECT * FROM `user` WHERE `username`='$user1'";
//echo $sql;
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($res);
//print_r($row['password']);
if(!$row){
    //echo "<script>alert('用户名不存在');location.href='../view/login.html'</script>";
    echo "用户名不存在";
}else{
    if($row['password']==$pwd1){
        //echo "<script>alert('登录成功');location.href='../view/home.html'</script>";
        echo "登录成功";
    }else{
        //echo "<script>alert('密码输入错误！');location.href='../view/login.html'</script>";
        echo "密码输入错误！";
    }
}

?>