<?php 
    header("Content-type:text/html;charset=utf-8");
	$phone = $_POST["phonea"];
	$password = $_POST["pass"];
//	let data = {
//		phonea:555,
//		userpassword:666
//	}
$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}else{
		//2）、选择目的地（选择操作的数据库）
		mysql_select_db("meili",$conn);
		$str = "select * from register where rphone='$phone'";
		$result = mysql_query($str,$conn);
		$rows = mysql_num_rows($result);
		if($rows <= 0){
			$str ="insert into register values('$phone','$password')";
			$result = mysql_query($str,$conn);
//			mysql_close($conn);

			if($result==1){
				echo "1"; 
			}else{
				echo "0";
			}		
		}else{
			echo "-1";
		}
	}
 ?>