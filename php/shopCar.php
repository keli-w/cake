<?php
    include('base.php');
    //定义sql语句
    $sql="select * from cake";
    $res=mysqli_query($conn,$sql);
    $arr=[];
    while($row=mysqli_fetch_assoc($res)){
        array_push($arr,$row);
    }
    //print_r($arr);
    echo json_encode($arr);
?>