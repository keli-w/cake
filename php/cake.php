<?php
    include('base.php');
    $n=$_GET['n'];
    $m=$_GET['m'];
    //定义sql语句
    //$sql = 'SELECT * FROM `cake` LIMIT $n, $m';//错误语句
    $sql="select * from cake limit $n,$m";
    $res=mysqli_query($conn,$sql);
    //$row=mysqli_fetch_array($res);
    $arr=[];
    while($row=mysqli_fetch_assoc($res)){
        array_push($arr,$row);
    }
    //print_r($arr);
    echo json_encode($arr);
?>