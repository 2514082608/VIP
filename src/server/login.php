<?php
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $link = mysqli_connect('localhost','root','root','login');
    $sql = " SELECT * FROM `login` WHERE `name`='$user' AND `word`='$pass' ";
    $res = mysqli_query($link,$sql);
    $date = mysqli_fetch_All($res,MYSQLI_ASSOC);
    mysqli_close($link);

    if(count($date)===0){
        $arr = array(
            'message'=>'失败',
            'code'=>0
        );
    }else{
        $arr = array(
            'message'=>'成功',
            'code' => 1,
            'nickname' => $date[0]['nickname']
        );
    }
    echo json_encode($arr);
?>


