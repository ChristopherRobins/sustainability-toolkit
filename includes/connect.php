<?php
	$user = "root";
	$pass = "";
	$url = "localhost";
	$db = "db_tavares";
	$link = mysqli_connect($url,$user, $pass, $db);
	if(mysqli_connect_errno()) {
		printf("Connection failed: %s/n", mysqli_connect_error());
		exit();
	}
?>