<?php
    header('content-type:text/html;charset=utf-8');
    //连接mysql数据库
    $conn=mysqli_connect('localhost','root','');
    //连接指定数据库
    mysqli_select_db($conn,'cake');
    //设置数据库编码
    mysqli_query($conn,'set names utf8');
?>