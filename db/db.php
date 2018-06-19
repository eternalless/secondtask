<?php
header("Content-type: text/html; charset=utf-8");
    // 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
    // 响应头设置
header('Access-Control-Allow-Headers:x-requested-with,content-type');
$server='localhost';
$uername='root';
$password='';
$dbname = "zydz";

$conn=new mysqli($server,$uername,$password,$dbname);

if($conn->connect_error){
die('连接失败：' . $conn->connect_error);
}
//echo 'success';
$sql="SELECT * FROM t_dz";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // 输出数据
//    while($row = $result->fetch_assoc()) {
        $row = $result->fetch_assoc();
//        echo $row["d_num"];
        $a=$row["d_num"]+1;
        $sql="UPDATE t_dz SET d_num='{$a}'";
        $result = $conn->query($sql);
        if($result){
        echo $a;
        } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        }
//    }
} else {
    echo "0 结果";
}



$conn->close();