<?php
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $link = mysqli_connect('localhost','root','root','login');
    $sql = " SELECT * FROM `login` WHERE `name`='$user'";
    $res = mysqli_query($link,$sql);
    $data = mysqli_fetch_All($res,MYSQLI_ASSOC);
    mysqli_close($link);
    

  

    if(count($data)==0){
    $link2 = mysqli_connect('localhost','root','root','login');
    $sql2 = " INSERT INTO `login` VALUES(null,'$user','$pass','VIP') ";
    $res2 = mysqli_query($link2,$sql2);
    mysqli_close($link2);
        $arr = array(
            'message'=>'没有查询到 我可以使用',
            'code'=> 1
        );
    }else{
        $arr = array(
            'message'=>'数据库里有 我不能使用',
            'code'=> 0
        );
    }
    echo json_encode($arr);
   
?>