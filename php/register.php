<?php
include('base.php');
$user=$_GET['user'];
$pwd1=$_GET['pwd1'];
$birthday=$_GET['birthday'];
$phone=$_GET['phone'];
//定义查询是否存在已注册的相同账号
$sql="SELECT * FROM `user` WHERE `username`='$user'";
echo $sql;
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($res);
if(!!$row){
    echo "<script>alert('该账户已存在');location.href='../view/register.html';</script>";
}else{
    //定义插入sql语句;
    $sql1="INSERT INTO `user`(`username`, `password`, `birthday`, `phone`) VALUES ('$user','$pwd1','$birthday','$phone')";
    $res1=mysqli_query($conn,$sql1);
    echo "<script>alert('注册成功!');location.href='../view/login.html'</script>";
    $sql2="INSERT INTO `shop_car`(`id`, `user`) VALUES (NULL,'$user')";
    $res2=mysqli_query($conn,$sql2);
}
?>