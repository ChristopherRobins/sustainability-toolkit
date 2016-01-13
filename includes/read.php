<?php

	function getAll($tbl){
		require_once('connect.php');

		$queryAll = "SELECT * FROM {$tbl}";
		//echo $queryAll;
		$runAll = mysqli_query($link, $queryAll);
		
		if($runAll){
			return $runAll;	
		}else{
			$error =  "There was an error accessing this information.  Please contact your admin.";
			return $error;
		}
		mysqli_close($link);
	}

	//$encode = mysqli_fetch_assoc($steps);

    //return json_encode($encode);

?>